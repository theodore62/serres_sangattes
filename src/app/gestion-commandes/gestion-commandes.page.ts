import { Component, OnInit } from '@angular/core';
import { IonicToastService } from '../services/ionic-toast.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
// formulaire
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

//model
import { Commande } from '../models/commande.model';
// service
import { CommandeService } from '../services/commande/commande.service';
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
  public tableauCommandes: any = [];
  // une commande
  public commande: Commande = {
    id: '',
    nom: '',
    client: '',
    prix: '',
    quantite: '',
    infoComplementaire: '',
  };

  get errorControl() {
    return this.formulaireCommande.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: IonicToastService,
    private commandeService: CommandeService,
    private firestore: AngularFirestore,
    public modalController: ModalController
  ) {}

  async ngOnInit() {
    if (this.affichage == undefined) {
      this.affichage = 'liste';
    }
    this.listCommandes = await this.initializeItems();

    this.formulaireCommande = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      client: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      infoComplementaire: ['', [Validators.required]],
    });
  }

  segmentChanged(ev: any) {
    this.affichage = ev.detail.value;
  }

  ajouter() {
    if (!this.formulaireCommande.valid) {
      this.message = 'Veuillez compléter le formulaire';
      this.toastCtrl.showToast(this.message);
    } else {
      this.commande.client = this.formulaireCommande.value.client;
      this.commande.nom = this.formulaireCommande.value.nom;
      this.commande.prix = this.formulaireCommande.value.prix;
      this.commande.quantite = this.formulaireCommande.value.quantite;
      this.commande.infoComplementaire =
        this.formulaireCommande.value.infoComplementaire;
      this.commandeService.postCommande(this.commande).then((retour) => {
        if (retour.id == null) {
          this.message = "les données n'ont pas pu être enregistrées";
          this.toastCtrl.showToast(this.message);
        } else {
          this.firestore.doc(`Commandes/${retour.id}`).set({
            id: retour.id,
            nom: this.formulaireCommande.value.nom,
            client: this.formulaireCommande.value.client,
            prix: this.formulaireCommande.value.prix,
            quantite: this.formulaireCommande.value.quantite,
            infoComplementaire:
              this.formulaireCommande.value.infoComplementaire,
          });
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
          currentPlant.client.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
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
    console.log(this.tableauCommandes);
    return this.tableauCommandes;
  }

  async delete(idCommande) {
    console.log(idCommande);
    this.commandeService.deleteCommande(idCommande);
    this.tableauCommandes = [];
    this.listCommandes = await this.initializeItems();
  }

  async update(idCommande) {
    console.log(idCommande);
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'data': 'commande',
        'idCommande': idCommande,
      },
    });
    return await modal.present();
  }
}
