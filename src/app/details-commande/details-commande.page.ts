import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IonicToastService } from '../services/ionic-toast.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
  LoadingController,
} from '@ionic/angular';
//model
import { Commande, Liste } from '../models/commande.model';
import { Client } from '../models/client.model';
import { Plante } from '../models/plante.model';
// service
import { CommandeService } from '../services/commande/commande.service';
import { ClientService } from '../services/client/client.service';
import { PlantesService } from '../services/plante/plantes.service';
// formulaire
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.page.html',
  styleUrls: ['./details-commande.page.scss'],
})
export class DetailsCommandePage implements OnInit {
  public tableauCommandes: any = [];
  public isSubmitted = false;
  public date: string;
  public infoComplementaire: string;
  public message: string;
  public affichage: any;

  public formulaireCommande: FormGroup;
  public ListePlantesCommande: Liste = {
    nom: '',
    prix: '',
    quantite: '',
    unite: '',
  };
  public i: any;
  public tableau: any = [];
  public details: any = [];
  public listClients: Observable<any[]>;
  public listPlantes: Observable<any[]>;
  public commande: Commande = {
    id: '',
    liste: this.ListePlantesCommande,
    date: '',
    client: '',
    infoComplementaire: '',
  };
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
  public refecheIdClient: any;
  public listCommandes: any;
  nom: string;
  prix: string;
  quantite: string;
  unite: string;

  @Input() idCommande: string;
  @Input() idClient: string;

  constructor(
    private commandeService: CommandeService,
    private clientService: ClientService,
    private plantesService: PlantesService,
    private firestore: AngularFirestore,
    private toastCtrl: IonicToastService,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {}

  get errorControl() {
    return this.formulaireCommande.controls;
  }
  ngOnInit() {

    if (this.affichage == undefined) {
      this.affichage = 'ajouter';
    }
    this.listClients = this.clientService.getListClients();
    this.listPlantes = this.plantesService.getListPlantes();

    this.commandeService
      .getDetailCommande(this.idCommande)
      .then((valueCommande) => {
        this.commande.client = valueCommande.client;
        this.commande.date = valueCommande.date;
        this.commande.infoComplementaire = valueCommande.infoComplementaire;
        this.tableau = valueCommande.liste;
        this.tableau.forEach((value, index, array) => {
          if (value.id != undefined || value.id != '') {
            this.i = value.id + 1;
          } else {
            this.i = 0;
          }
        });
        this.details.push(valueCommande);
        this.details.forEach((index) => {
          const inforComplementaire = window.document.getElementById('info');
          const date = window.document.getElementById('date');
          const client = window.document.getElementById('client');
          if (inforComplementaire != null && date != null && client != null) {
            inforComplementaire.setAttribute('value', index.infoComplementaire);
            client.setAttribute('value', index.client);
            date.setAttribute(
              'value',
              formatDate(index.date, 'yyyy-MM-dd', 'en-US')
            );
          }
        });
      });
      this.initializeItems();

    this.formulaireCommande = this.formBuilder.group({
      client: ['', [Validators.required]],
      date: ['', [Validators.required]],
      infoComplementaire: ['', [Validators.required]],
    });
  }

  segmentChanged(ev: any) {
    this.affichage = ev.detail.value;
  }
  async initializeItems(): Promise<any> {
    this.client = {
    id: '',
    nom: '',
    prenom: '',
    email: '',
    fixe: '',
    portable: '',
    adresse: '',
    postal: '',
  };
  if(this.commande.client == '' || this.commande.client == null ||this.commande.client == undefined ){   
    this.refecheIdClient = this.idClient;
  }else{
    this.refecheIdClient = '';
    this.refecheIdClient = this.formulaireCommande.value.client;
  }
    this.clientService.getClient(this.refecheIdClient).then((valueClient) => {
      this.client.nom  = valueClient.nom;
      this.client.prenom  = valueClient.prenom;
      this.client.email  = valueClient.email;
      this.client.fixe  = valueClient.fixe;
      this.client.portable  = valueClient.portable;
      this.client.adresse  = valueClient.adresse;
      this.client.postal  = valueClient.postal;
    });  
  }

  doRefresh(event) {
    setTimeout(() => {
      this.initializeItems();
      event.target.complete();
    }, 2000);
  }

  addLigne() {
    this.ListePlantesCommande.nom = this.nom;
    this.ListePlantesCommande.prix = this.prix;
    this.ListePlantesCommande.quantite = this.quantite;
    this.ListePlantesCommande.unite = this.unite;
    this.tableau.push({
      id: this.i,
      nom: this.nom,
      prix: this.prix + '€',
      quantite: this.quantite,
      unite: this.unite,
    });
    this.i++;
    this.nom = '';
    this.prix = '';
    this.quantite = '';
    this.unite = '';
  }
  update() {
    this.firestore.doc(`Commandes/${this.idCommande}`).set({
      id: this.idCommande,
      liste: this.tableau,
      date: formatDate(this.formulaireCommande.value.date,'dd/MM/yyyy', 'fr-FR'),
      client: this.formulaireCommande.value.client,
      infoComplementaire: this.formulaireCommande.value.infoComplementaire,
    });
    this.message = 'les données ont pu être enregistrées';
    this.toastCtrl.showToast(this.message);

  }

  deleteLigne(id) {
    this.tableau.filter((value, index) => {
      if (value.id == id) {
        this.tableau.splice(index, 1);
      }
    });
  }

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
