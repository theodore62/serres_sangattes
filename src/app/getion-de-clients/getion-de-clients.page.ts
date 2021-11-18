import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// formulaire
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { IonicToastService } from '../services/ionic-toast.service';
//model
import { Client } from '../models/client.model';
// service
import { ClientService } from '../services/client/client.service';
import { ModalPage } from '../modal/modal.page';
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
} from '@ionic/angular';

@Component({
  selector: 'app-getion-de-clients',
  templateUrl: './getion-de-clients.page.html',
  styleUrls: ['./getion-de-clients.page.scss'],
})
export class GetionDeClientsPage implements OnInit {
  public affichage: any;
  public isSubmitted = false;
  public message: string;
  public clientFrom: FormGroup;
  public tableauClients: any = [];
  public clientsList: any;
  public client: Client = {
    id: '',
    nom: '',
    prenom: '',
    email: '',
    fixe: '',
    portable: '',
    adresse: '',
    postal: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: IonicToastService,
    private clientService: ClientService,
    private modalController: ModalController,
    private firestore: AngularFirestore,
    private router: Router,
    private dataService: DataService,
  ) {}

  async ngOnInit() {
    if (this.affichage === undefined) {
      this.affichage = 'liste';
    }
    this.clientsList = await this.initializeItems();
    this.clientFrom = this.formBuilder.group({
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
  }
  segmentChanged(ev: any) {
    this.affichage = ev.detail.value;
  }

  async initializeItems(): Promise<any> {
    this.tableauClients = [];
    this.tableauClients = await this.clientService.getClientsList();
    return this.tableauClients;
  }

  async filterList(ev: any) {
    this.clientsList = await this.initializeItems();
    const searchTerm = ev.srcElement.value;

    if (!searchTerm) {
      return;
    }
    this.clientsList = this.clientsList.filter((currentPlant) => {
      if (currentPlant.nom && searchTerm) {
        return (
          currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1 ||
          currentPlant.prenom.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1
        );
      }
    });
  }

  async doRefresh(event) {
    const teste = await this.initializeItems();
    console.log('Begin async operation');
    setTimeout(() => {
      this.clientsList = teste;
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  get errorControl() {
    return this.clientFrom.controls;
  }
  addClient() {
    if (!this.clientFrom.valid) {
      this.message = 'enter une valeur dans le champ';
      this.toastCtrl.showToast(this.message);
    } else {
      this.client.nom = this.clientFrom.value.nom;
      this.client.prenom = this.clientFrom.value.prenom;
      this.client.email = this.clientFrom.value.email;
      this.client.fixe = this.clientFrom.value.fixe;
      this.client.portable = this.clientFrom.value.portable;
      this.client.adresse = this.clientFrom.value.adresse;
      this.client.postal = this.clientFrom.value.postal;
      this.clientService.postClient(this.client).then((retour) => {
        if (retour.id == null) {
          this.message = 'les données n\'ont pas pu être enregistrées';
          this.toastCtrl.showToast(this.message);
        } else {
          this.firestore.doc(`Client/${retour.id}`).set({
            id: retour.id,
            nom: this.clientFrom.value.nom,
            prenom: this.clientFrom.value.prenom,
            email: this.clientFrom.value.email,
            fixe: this.clientFrom.value.fixe,
            portable: this.clientFrom.value.portable,
            adresse: this.clientFrom.value.adresse,
            postal: this.clientFrom.value.postal,
          });
          this.message = 'les données ont pu être enregistrées';
          this.toastCtrl.showToast(this.message);
        }
      });
    }
  }
  async update(idClient) {
    this.dataService.setData('idClient', idClient);
    this.router.navigateByUrl('details-client');
  }

  async delete(id) {
    console.log(id);
    this.clientService.deleteClient(id);
    this.tableauClients = [];
    this.clientsList = await this.initializeItems();
    this.message = 'les données ont pu être supprimer';
    this.toastCtrl.showToast(this.message);
  }
}
