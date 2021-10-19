/* eslint-disable @typescript-eslint/naming-convention */
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
import { ActivatedRoute, Router } from '@angular/router';
// google map
import {
  GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
} from '@ionic-native/google-maps';
import { ActionSheetController, Platform } from '@ionic/angular';
import { DataService } from '../services/data.service';
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from '@ionic-native/native-geocoder/ngx';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.page.html',
  styleUrls: ['./details-commande.page.scss'],
})
export class DetailsCommandePage implements OnInit {
  // google
  public marker: Marker;
  public address: any;
  public isRunning = false;
  map: GoogleMap;
  public geometry: {
    lat: any;
    lng: any;
  };
  public lat: any;
  public lng: any;
  /**************/

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
    numero: '',
    id: '',
    liste: this.ListePlantesCommande,
    date: '',
    nom: '',
    client: '',
    infoComplementaire: '',
    archive: false,
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
  public id: any;

  constructor(
    private commandeService: CommandeService,
    private clientService: ClientService,
    private plantesService: PlantesService,
    private firestore: AngularFirestore,
    private toastCtrl: IonicToastService,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private httpClient: HttpClient,
    private nativeGeocoder: NativeGeocoder
  ) {}

  get errorControl() {
    return this.formulaireCommande.controls;
  }
  ngOnInit() {
    this.id = this.dataService.getData('id');
    if (this.affichage === undefined) {
      this.affichage = 'ajouter';
      this.listClients = this.clientService.getListClients();
      this.listPlantes = this.plantesService.getListPlantes();
      this.commandeService
        .getDetailCommande(this.id.idCommande)
        .then((valueCommande) => {
          this.commande.numero = valueCommande.numero;
          this.commande.nom = valueCommande.nom;
          this.commande.client = valueCommande.client;
          this.commande.date = valueCommande.date;
          this.commande.infoComplementaire = valueCommande.infoComplementaire;
          this.tableau = valueCommande.liste;
          this.tableau.forEach((value, index, array) => {
            if (value.id !== undefined || value.id !== '') {
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
              inforComplementaire.setAttribute(
                'value',
                index.infoComplementaire
              );
              client.setAttribute('value', index.client);
              date.setAttribute(
                'value',
                formatDate(index.date, 'yyyy-MM-dd', 'en-US')
              );
            }
          });
        });
      this.formulaireCommande = this.formBuilder.group({
        client: ['', [Validators.required]],
        date: ['', [Validators.required]],
        infoComplementaire: ['', [Validators.required]],
      });
      this.initializeItems();
    } else {
      this.initializeItems();
      this.loadMap();
    }
  }
  async initializeItems(): Promise<any> {
    if (
      this.commande.client === '' ||
      this.commande.client == null ||
      this.commande.client === undefined
    ) {
      this.refecheIdClient = this.id.idClient;
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
    } else {
      this.refecheIdClient = '';
      this.refecheIdClient = this.formulaireCommande.value.client;
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
    }
    this.clientService.getClient(this.refecheIdClient).then((valueClient) => {
      this.client.nom = valueClient.nom;
      this.client.prenom = valueClient.prenom;
      this.client.email = valueClient.email;
      this.client.fixe = valueClient.fixe;
      this.client.portable = valueClient.portable;
      this.client.adresse = valueClient.adresse;
      this.client.postal = valueClient.postal;
    });
  }
  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyC47GVvBEShojMwLSD1JK2O6adqaUdaVK8',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyC47GVvBEShojMwLSD1JK2O6adqaUdaVK8',
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 50.9581,
          lng: 1.8521,
        },
        zoom: 12,
        tilt: 30,
      },
    });

    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };
    this.address = this.client.adresse + ',' + this.client.postal;
    console.log(this.address);
    this.nativeGeocoder
      .forwardGeocode(this.address, options)
      .then((result: NativeGeocoderResult[]) => {
        this.lat = parseFloat(result[0].latitude);
        this.lng = parseFloat(result[0].longitude);
        // Add a marker
        const marker: Marker = this.map.addMarkerSync({
          position: new LatLng(this.lat, this.lng),
          title: this.address,
        });
        // Move to the position
        this.map
          .animateCamera({
            target: marker.getPosition(),
            zoom: 12,
          })
          .then(() => {
            marker.showInfoWindow();
            this.isRunning = false;
          });
      })
      .catch((error: any) => console.log('ERREUR = ' + error));
  }

  segmentChanged(ev: any) {
    this.affichage = ev.detail.value;
    if (this.affichage === 'liste') {
      this.loadMap();
    }
    if (this.affichage === 'ajouter') {
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
    }
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
    this.firestore.doc(`Commandes/${this.id.idCommande}`).set({
      archive: this.commande.archive,
      numero: this.commande.numero,
      nom: this.commande.nom,
      id: this.id.idCommande,
      liste: this.tableau,
      date: formatDate(
        this.formulaireCommande.value.date,
        'yyyy-MM-dd',
        'en-US'
      ),
      client: this.formulaireCommande.value.client,
      infoComplementaire: this.formulaireCommande.value.infoComplementaire,
    });
    this.message = 'les données ont pu être enregistrées';
    this.toastCtrl.showToast(this.message);
  }

  deleteLigne(id) {
    this.tableau.filter((value, index) => {
      if (value.id === id) {
        this.tableau.splice(index, 1);
      }
    });
  }
}
