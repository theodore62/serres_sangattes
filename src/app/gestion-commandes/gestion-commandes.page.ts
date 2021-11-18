import { Component, OnInit } from '@angular/core';
import { IonicToastService } from '../services/ionic-toast.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
// formulaire
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';

//model
import { Commande, Liste } from '../models/commande.model';
import { Client } from '../models/client.model';
// service
import { CommandeService } from '../services/commande/commande.service';
import { ClientService } from '../services/client/client.service';
import { PlantesService } from '../services/plante/plantes.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  public checkCommandeListe = [];
  public listCommandes: any;
  public listeTableauCommande: Observable<any[]>;
  public listClients: Observable<any[]>;
  public listPlantes: Observable<any[]>;
  public dateDeDemain: any;
  public dateDuJour: any;
  public numeroCommande: any;

  public tableauCommandes: any = [];
  public tableau: any = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public ListePlantesCommande: Liste = {
    nom: '',
    prix: '',
    quantite: '',
    unite: '',
  };
  // une commande
  public commande: Commande = {
    numero: '',
    id: '',
    liste: this.ListePlantesCommande,
    date: '',
    nom: '',
    client: '',
    infoComplementaire: '',
    archive: false,
  };

  nom: string;
  prix: string;
  quantite: string;
  unite: string;
  archiver: boolean;

  public i = -30;

  get errorControl() {
    return this.formulaireCommande.controls;
  }

  constructor(
    private dataService: DataService,
    // private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastCtrl: IonicToastService,
    private commandeService: CommandeService,
    private clientService: ClientService,
    private plantesService: PlantesService,
    private firestore: AngularFirestore,
    public modalController: ModalController,
    public datePipe: DatePipe,
    public alertController: AlertController
  ) {}

  async ngOnInit() {
    const demain = new Date();
    const lendemain = this.addDaysToDate(demain, 1);
    this.dateDeDemain = formatDate(lendemain, 'yyyy-MM-dd', 'en-US');
    this.dateDuJour = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    this.listeCommande();
    if (this.affichage === undefined) {
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
  async listeCommande() {
    this.listeTableauCommande = await this.initializeItems();
  }

  addDaysToDate(date, days) {
    const res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
  }

  getTasks() {
    this.commandeService.getCommandesList().then((retour) => {
      this.checkCommandeListe = [];
      retour.forEach((action) => {
        this.checkCommandeListe.push({
          numero: action.numero,
          id: action.id,
          liste: action.liste,
          client: action.client,
          date: action.date,
          infoComplementaire: action.infoComplementaire,
          archive: action.archive,
        });
      });
    });
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
    this.unite = '';
  }
  deleteLigne(id) {
    this.tableau.filter((value, index, array) => {
      if (value.id === id) {
        this.tableau.splice(index, 1);
      }
    });
  }

  ajouter() {
    if (!this.formulaireCommande.valid) {
      this.message = 'Veuillez compléter le formulaire';
      this.toastCtrl.showToast(this.message);
    } else {
      this.numeroCommande = this.strRandom({
        includeUpperCase: true,
        includeNumbers: true,
        length: 10,
        startsWithLowerCase: true,
      });
      console.log();
      if (this.listCommandes.length !== 0) {
        this.listCommandes.forEach((value, index, array) => {
          console.log(this.numeroCommande);
          if (value.numero !== this.numeroCommande) {
            this.insert();
          } else {
            this.numeroCommande = '';
            this.numeroCommande = this.strRandom({
              includeUpperCase: true,
              includeNumbers: true,
              length: 10,
              startsWithLowerCase: true,
            });
            this.insert();
          }
        });
      } else {
        this.insert();
      }
    }
  }
  async filterList(ev: any) {
    this.listCommandes = await this.initializeItems();
    const searchTerm = ev.srcElement.value;

    if (!searchTerm) {
      return;
    }
    this.listCommandes = this.listCommandes.filter((currentPlant) => {
      if (currentPlant.numero && searchTerm) {
        return (
          currentPlant.numero.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1 ||
          currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }

  async doRefresh(event) {
    const teste = await this.initializeItems();
    setTimeout(() => {
      this.listCommandes = teste;
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
    this.message = 'les données ont pu être supprimer';
    this.toastCtrl.showToast(this.message);
  }

  async update(idCommande, idClient) {
    const id = {
      idCommande: idCommande,
      idClient: idClient,
    };
    this.dataService.setData('id', id);
    this.router.navigateByUrl('details-commande');
  }

  changeCheckState(id, ev: any) {
    this.commandeService.getDetailCommande(id).then((retour) => {
      retour.archive = ev;
      this.firestore.doc(`Commandes/${retour.id}`).set(retour);
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
  strRandom(o) {
    let a = 10;
    const b = 'abcdefghijklmnopqrstuvwxyz';
    let c = '';
    let d = 0;
    let e = '' + b;

    if (o) {
      if (o.startsWithLowerCase) {
        c = b[Math.floor(Math.random() * b.length)];
        d = 1;
      }
      if (o.length) {
        a = o.length;
      }
      if (o.includeUpperCase) {
        e += b.toUpperCase();
      }
      if (o.includeNumbers) {
        e += '1234567890';
      }
    }
    for (; d < a; d++) {
      c += e[Math.floor(Math.random() * e.length)];
    }
    return c;
  }
  insert() {
    this.commande.client = this.formulaireCommande.value.client;
    this.clientService.getClient(this.commande.client).then((value) => {
      this.commande.nom = value.nom;
    });
    this.commande.liste = this.tableau;
    this.commande.date = formatDate(
      this.formulaireCommande.value.date,
      'yyyy-MM-dd',
      'en-US'
    );
    this.commande.infoComplementaire =
      this.formulaireCommande.value.infoComplementaire;
    this.commandeService.postCommande(this.commande).then((retour) => {
      if (retour.id == null) {
        this.message = 'les données n\'ont pas pu être enregistrées';
        this.toastCtrl.showToast(this.message);
      } else {
        this.firestore.doc(`Commandes/${retour.id}`).set({
          numero: this.numeroCommande,
          id: retour.id,
          liste: this.tableau,
          client: this.formulaireCommande.value.client,
          nom: this.commande.nom,
          date: formatDate(
            this.formulaireCommande.value.date,
            'yyyy-MM-dd',
            'en-US'
          ),
          infoComplementaire: this.formulaireCommande.value.infoComplementaire,
          archive: false,
        });
        this.message = 'les données ont pu être enregistrées';
        this.toastCtrl.showToast(this.message);
      }
    });
  }
}
