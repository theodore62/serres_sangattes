import { Component, OnInit, Input } from '@angular/core';
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
  LoadingController,
} from '@ionic/angular';
//----//
// service
import { PlantesService } from '../services/plante/plantes.service';
import { CommandeService } from '../services/commande/commande.service';
import { ClientService } from '../services/client/client.service';
//model
import { Plante } from '../models/plante.model';
import { Commande } from '../models/commande.model';
import { Client } from '../models/client.model';
//----//
import { AngularFireStorage } from '@angular/fire/storage';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
//camera
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { IonicToastService } from '../services/ionic-toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.page.html',
  styleUrls: ['./details-client.page.scss'],
})
export class DetailsClientPage implements OnInit {
  public formulaireClient: FormGroup;
  public clientDetail: any = [];
  public isSubmitted = false;
  public tableauCommandes: any = [];
  public listCommandes: any;
  public commandesList: any;
  public affichage: any;
  public idClient: any;
  public message: string;
  constructor(
    private alertController: AlertController,
    private afSG: AngularFireStorage,
    private plantesService: PlantesService,
    private commandeService: CommandeService,
    private clientService: ClientService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private camera: Camera,
    private firestore: AngularFirestore,
    private loadingController: LoadingController,
    private toastCtrl: IonicToastService,
    private router: Router,
    private dataService: DataService
  ) {}

  get errorControl() {
    return this.formulaireClient.controls;
  }
  async ngOnInit() {
    this.idClient = this.dataService.getData('idClient');
    this.commandesList = await this.initializeCommandes();
    if (this.affichage === undefined) {
      this.affichage = 'ajouter';
    }
    console.log(this.commandesList);
    this.formulaireClient = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [Validators.required, Validators.minLength(2), Validators.email],
      ],
      fixe: ['', [Validators.maxLength(10)]],
      portable: ['', [Validators.required, Validators.maxLength(10)]],
      adresse: ['', [Validators.required, Validators.minLength(2)]],
      postal: ['', [Validators.required, Validators.maxLength(5)]],
    });
    this.clientService.getClient(this.idClient).then((detailClient) => {
      this.clientDetail.push(detailClient);
      this.clientDetail.forEach((index) => {
        document.getElementById('nom').setAttribute('value', index.nom);
        document.getElementById('prenom').setAttribute('value', index.prenom);
        document.getElementById('email').setAttribute('value', index.email);
        document.getElementById('fixe').setAttribute('value', index.fixe);
        document
          .getElementById('portable')
          .setAttribute('value', index.portable);
        document.getElementById('adresse').setAttribute('value', index.adresse);
        document.getElementById('postal').setAttribute('value', index.postal);
      });
    });
  }
  async updateClient() {
    if (!this.formulaireClient.valid) {
      this.message = 'enter une valeur dans le champ';
      this.toastCtrl.showToast(this.message);
      return false;
    } else {
      this.clientService.updateClient(
        this.idClient,
        this.formulaireClient.value
      );
      this.message = 'La ou les modification(s) on ou à bien était éffectuer';
      this.toastCtrl.showToast(this.message);
    }
  }

  segmentChanged(ev: any) {
    this.affichage = ev.detail.value;
  }
  async initializeCommandes(): Promise<any> {
    this.tableauCommandes = [];
    let tab = [];
    tab = await this.commandeService.getCommandesList();
    tab.forEach((value) => {
      if (value.client === this.idClient) {
        console.log(value);
        this.tableauCommandes.push(value);
      }
    });
    return this.tableauCommandes;
  }
  async delete(id) {
    console.log(id);
    this.commandeService.deleteCommande(id);
    this.tableauCommandes = [];
    this.tableauCommandes = await this.initializeCommandes();
  }
  async update(idCommande, idClient) {
    const id = {
      idCommande: idCommande,
      idClient: idClient,
    };
    this.dataService.setData('id', id);
    this.router.navigateByUrl('details-commande');
  }

  async doRefresh(event) {
    const teste = await this.initializeCommandes();
    setTimeout(() => {
      this.commandesList = teste;
      event.target.complete();
    }, 2000);
  }

  async filterList(ev: any) {
    this.commandesList = await this.initializeCommandes();
    const searchTerm = ev.srcElement.value;

    if (!searchTerm) {
      return;
    }
    this.commandesList = this.commandesList.filter((currentPlant) => {
      if (currentPlant.numero && searchTerm) {
        return (
          currentPlant.numero.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1 ||
          currentPlant.date.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }
}
