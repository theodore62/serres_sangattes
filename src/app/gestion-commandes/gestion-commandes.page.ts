import { Component, OnInit } from '@angular/core';
import { IonicToastService } from '../services/ionic-toast.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { element } from 'protractor';
// formulaire
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

//model
import { Commande, Liste } from '../models/commande.model';
import { Client}  from '../models/client.model';
import { Plante } from '../models/plante.model';
// service
import { CommandeService } from '../services/commande/commande.service';
import { ClientService } from '../services/client/client.service';
import { PlantesService } from '../services/plante/plantes.service';
import { DetailsCommandePage } from '../details-commande/details-commande.page';
;

@Component({
  selector: 'app-gestion-commandes',
  templateUrl: './gestion-commandes.page.html',
  styleUrls: ['./gestion-commandes.page.scss'],
})
export class GestionCommandesPage implements OnInit {
  public affichage: any;
  public formulaireCommande: FormGroup;
  public message: string;
  public isSubmitted = false;
  public listCommandes: any;
  public listeTableauCommande: Observable<any[]>;
  public listClients: Observable<any[]>;
  public listPlantes: Observable<any[]>;
  public dateDeDemain: any;
  public dateDuJour: any;


  public tableauCommandes: any = [];
  public tableau: any = [];
  public ListePlantesCommande: Liste = {
    nom: '',
    prix: '',
    quantite: '',
    unite: '',
  };
  // une commande
  public commande: Commande = {
    id: '',
    liste: this.ListePlantesCommande,
    date:'',
    client: '',
    infoComplementaire: '',
  };

  nom: string;
  prix: string;
  quantite: string;
  unite: string;

  public i = -30;

  get errorControl() {
    return this.formulaireCommande.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: IonicToastService,
    private commandeService: CommandeService,
    private clientService: ClientService,
    private plantesService: PlantesService,
    private firestore: AngularFirestore,
    public modalController: ModalController,
    private datePipe: DatePipe
  ) {}

  async ngOnInit() {

    const demain =  new Date();
    const lendemain =  this.addDaysToDate(demain, 1)
    this.dateDeDemain =  formatDate(lendemain,'dd/MM/yyyy', 'fr-FR');
    this.dateDuJour = formatDate(new Date(),'dd/MM/yyyy', 'fr-FR');
    console.log(this.dateDeDemain);
    console.log(this.dateDuJour);
   
 

  

    this.listeCommande();
    if (this.affichage == undefined) {
      this.affichage = 'liste';
    }
    this.listCommandes = await this.initializeItems();
    this.listClients = this.clientService.getListClients();
    this.listPlantes = this.plantesService.getListPlantes();
    this.formulaireCommande = this.formBuilder.group({
      client: ['', [Validators.required]],
      date: ['', [Validators.required]],
      infoComplementaire: ['', [Validators.required]],
    });

  }
  async listeCommande(){
      this.listeTableauCommande = await this.initializeItems();
   
  }

   addDaysToDate(date, days){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}





  segmentChanged(ev: any) {
    this.affichage = ev.detail.value;
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
    this.unite='';
    console.log(this.tableau);
  }
  deleteLigne(id) {
    this.tableau.filter((value, index, array) => {
      if (value.id == id) {
        this.tableau.splice(index, 1);
      }
    });
  }

  ajouter() { 
    if (!this.formulaireCommande.valid) {
      this.message = 'Veuillez compléter le formulaire';
      this.toastCtrl.showToast(this.message);
    } else {
      
      this.commande.client = this.formulaireCommande.value.client;
      this.commande.liste = this.tableau;
      this.commande.date = formatDate(this.formulaireCommande.value.date,'dd/MM/yyyy', 'fr-FR');     
      this.commande.infoComplementaire = this.formulaireCommande.value.infoComplementaire;
      this.commandeService.postCommande(this.commande).then((retour) => {
        if (retour.id == null) {
          this.message = "les données n'ont pas pu être enregistrées";
          this.toastCtrl.showToast(this.message);
        } else {
          this.firestore.doc(`Commandes/${retour.id}`).set({
            id: retour.id,
            Liste: this.tableau,
            client: this.formulaireCommande.value.client,
            date: formatDate(this.formulaireCommande.value.date,'dd/MM/yyyy', 'fr-FR'),
            infoComplementaire: this.formulaireCommande.value.infoComplementaire,
          });
          this.message = "les données ont pu être enregistrées";
          this.toastCtrl.showToast(this.message);
        }
      });
    }
  }
  async filterList(ev: any) {
    this.listCommandes = await this.initializeItems();
    const searchTerm = ev.srcElement.value;

    if (!searchTerm) {
      return;
    }
    this.listCommandes = this.listCommandes.filter((currentPlant) => {
      if (currentPlant.client && searchTerm) {
        return (
          currentPlant.client.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1 ||
          currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }

  async doRefresh(event) {
    const teste = await this.initializeItems();
    console.log('Begin async operation');
    setTimeout(() => {
      this.listCommandes = teste;
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async initializeItems(): Promise<any> {
    this.tableauCommandes = [];
    this.tableauCommandes = await this.commandeService.getCommandesList();  
    return this.tableauCommandes;
  }

  async delete(idCommande) {
    this.commandeService.deleteCommande(idCommande);
    this.tableauCommandes = [];
    this.listCommandes = await this.initializeItems();
  }

  async update(idCommande,idClient) {
    const modal = await this.modalController.create({
      component: DetailsCommandePage,
      cssClass: 'my-custom-class',
      componentProps: {
        idCommande: idCommande,
        idClient: idClient,
      },
    });
    return await modal.present();
  }
}
