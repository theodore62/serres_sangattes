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
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public isSubmitted = false;
  public message: string;
  @Input() data: string;

  //---------------------------------------------------------------------------------//
  //------------------------------detail des plantes---------------------------------//
  //---------------------------------------------------------------------------------//
  // plante //
  public id: Plante;
  public planteDetail: any = [];
  public annonce: FormGroup;
  public image = '';
  public imagePath: string;
  public epoque: string;
  public varieters: Observable<any[]>;
  public upload: any;
  public urlImage: any;
  public urlImageUpdate: any;
  public texte: any = '';
  public listMois: any;
  public plante: Plante = {
    id: '',
    nom: '',
    variete: '',
    couleur: '',
    fleuraison: '',
    hauteur: '',
    description: '',
    type: '',
    de: '',
    a: '',
    image: '',
  };

  //---------------------------------------------------------------------------------//
  //-------------------------commandes-----------------------------------------------//
  //---------------------------------------------------------------------------------//
  // commande //

  @Input() idCommande: string;
  public formulaireCommande: FormGroup;
  nom: string;
  prix: string;
  quantite: string;

  //---------------------------------------------------------------------------------//
  //-------------------------client--------------------------------------------------//
  //---------------------------------------------------------------------------------//
  // client //
  @Input() idClient: string;
  public formulaireClient: FormGroup;
  public clientDetail: any = [];
  public affichage: any;

  // ---------------------------------------------- //
  // ---------------------------------------------- //

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
    private router: Router
  ) {}

  get errorControl() {
    if (this.data === 'commande') {
      return this.formulaireCommande.controls;
    } else if (this.data === 'client') {
      return this.formulaireClient.controls;
    } else {
      return this.annonce.controls;
    }
  }

  ngOnInit() {
    //---------------------------------------------------------------------------------//
    //-------------------------commandes-----------------------------------------------//
    //---------------------------------------------------------------------------------//
    if (this.data === 'commande') {
      this.formulaireCommande = this.formBuilder.group({
        nom: ['', [Validators.required]],
        client: ['', [Validators.required]],
        prix: ['', [Validators.required]],
        quantite: ['', [Validators.required]],
        infoComplementaire: ['', [Validators.required]],
      });
      this.commandeService
        .getDetailCommande(this.idCommande)
        .then((detailCommande) => {
          // document
          //   .getElementById('nom')
          //   .setAttribute('value', detailCommande.nom);
          // document
          //   .getElementById('client')
          //   .setAttribute('value', detailCommande.client);
          // document
          //   .getElementById('prix')
          //   .setAttribute('value', detailCommande.prix);
          // document
          //   .getElementById('quantite')
          //   .setAttribute('value', detailCommande.quantite);
          // document
          //   .getElementById('infoComplementaire')
          //   .setAttribute('value', detailCommande.infoComplementaire);
        });
    }
    //---------------------------------------------------------------------------------//
    //-------------------------client--------------------------------------------------//
    //---------------------------------------------------------------------------------//
    else if (this.data === 'client') {
      if (this.affichage == undefined) {
        this.affichage = 'ajouter';
      }
      this.formulaireClient = this.formBuilder.group({
        nom: ['', [Validators.required, Validators.minLength(2)]],
        prenom: ['', [Validators.required, Validators.minLength(2)]],
        email: [  '',[Validators.required, Validators.minLength(2), Validators.email]],
        fixe: ['', [Validators.maxLength(10)]],
        portable: ['', [Validators.required, Validators.maxLength(10)]],
        adresse: ['', [Validators.required, Validators.minLength(2)]],
        postal: ['', [Validators.required, Validators.maxLength(5)]],
      });
      console.log(this.idClient);
      this.clientService.getClient(this.idClient).then((detailClient) => {
        console.log(detailClient)
        this.clientDetail.push(detailClient);
        this.clientDetail.forEach((index) => {
          document.getElementById('nom').setAttribute('value', index.nom);
          document
            .getElementById('prenom')
            .setAttribute('value', index.prenom);
          document
            .getElementById('email')
            .setAttribute('value', index.email);
          document
            .getElementById('fixe')
            .setAttribute('value', index.fixe);
          document
            .getElementById('portable')
            .setAttribute('value', index.portable);
          document
            .getElementById('adresse')
            .setAttribute('value', index.adresse);
          document
            .getElementById('postal')
            .setAttribute('value', index.postal);
        })
     
      });
    }
    //---------------------------------------------------------------------------------//
    //------------------------------detail des plantes---------------------------------//
    //---------------------------------------------------------------------------------//
    else {
      this.varieters = this.firestore.collection('Variete').valueChanges();
      this.listMois = [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'aout',
        'septembre',
        'octobre',
        'novembre',
        'décembre',
      ];
      this.annonce = this.formBuilder.group({
        nom: ['', [Validators.required]],
        variete: ['', [Validators.required]],
        couleur: ['', [Validators.required]],
        fleuraison: ['', [Validators.required]],
        hauteur: ['', [Validators.required]],
        description: ['', [Validators.required]],
        type: ['', [Validators.required]],
        de: ['', [Validators.required]],
        a: ['', [Validators.required]],
        image: [''],
      });
      this.plantesService.getDetailPlante(this.id).then((detailPlante) => {
        this.planteDetail.push(detailPlante);
        this.urlImageUpdate = this.planteDetail[0].image;
        this.afSG
          .ref('/' + detailPlante.image)
          .getDownloadURL()
          .subscribe((imgUrl) => {
            this.planteDetail[0].image = imgUrl;
            this.planteDetail.forEach((items) => {
              this.urlImage = items.image;
              this.epoque = items.type;
              if (this.epoque !== 'Fleur') {
                this.texte = 'Epoque de récolte:';
                document.getElementById('fleuraisonLF').style.display = 'block';
                document.getElementById('nom').setAttribute('value', items.nom);
                document
                  .getElementById('couleur')
                  .setAttribute('value', items.couleur);
                document
                  .getElementById('hauteur')
                  .setAttribute('value', items.hauteur);
                document
                  .getElementById('description')
                  .setAttribute('value', items.description);
                document
                  .getElementById('type')
                  .setAttribute('value', items.type);
                document
                  .getElementById('urlimage')
                  .setAttribute('src', items.image);
                document
                  .getElementById('fleuraisonLF')
                  .setAttribute('value', items.fleuraison);
                document
                  .getElementById('variete')
                  .setAttribute('value', items.variete);
              } else {
                this.texte = 'Epoque de fleuraison:';
                document.getElementById('fleuraison').style.display = 'block';
                document.getElementById('nom').setAttribute('value', items.nom);
                document
                  .getElementById('couleur')
                  .setAttribute('value', items.couleur);
                document
                  .getElementById('hauteur')
                  .setAttribute('value', items.hauteur);
                document
                  .getElementById('description')
                  .setAttribute('value', items.description);
                document
                  .getElementById('type')
                  .setAttribute('value', items.type);
                document
                  .getElementById('urlimage')
                  .setAttribute('src', items.image);
                document
                  .getElementById('fleuraison')
                  .setAttribute('value', items.fleuraison);
                document
                  .getElementById('variete')
                  .setAttribute('value', items.variete);
              }
              document.getElementById('de').setAttribute('value', items.de);
              document.getElementById('a').setAttribute('value', items.a);
            });
          });
      });
    }
  }
  //---------------------------------------------------------------------------------//
  //-------------------------commandes-----------------------------------------------//
  //---------------------------------------------------------------------------------//

  async addCommande() {
    if (!this.formulaireCommande.valid) {
      this.message = 'enter une valeur dans le champ';
      return false;
    } else {
      const loading = await this.loadingController.create({
        duration: 2000,
      });
      await loading.present();
      this.commandeService.updateCommande(
        this.idCommande,
        this.formulaireCommande.value
      );
      await loading.onDidDismiss();
      const alert = await this.alertController.create({
        header: 'Félicitation',
        message: 'La ou les modification(s) on ou à bien était éffectuer',
        buttons: ['OK'],
      });
      await alert.present();
      this.modalController.dismiss({
        dismissed: true,
      });
    }
  }

  //---------------------------------------------------------------------------------//
  //------------------------------detail des plantes---------------------------------//
  //---------------------------------------------------------------------------------//

  async addPhoto() {
    const libraryImage = await this.openLibrary();
    this.image = 'data:image/jpg;base64,' + libraryImage;
  }
  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };
    return await this.camera.getPicture(options);
  }

  async uploadFirebase() {
    this.upload = this.afSG
      .ref(this.imagePath)
      .putString(this.image, 'data_url');
  }

  async addAnnonce() {
    if (!this.annonce.valid) {
      this.message = 'enter une valeur dans le champ';
      return false;
    } else {
      console.log(this.image);
      if (this.image !== '') {
        this.imagePath = new Date().getTime() + '.jpg';
        this.uploadFirebase();
        this.afSG.refFromURL(this.urlImage).delete();
        this.annonce.value.image = this.imagePath;
      } else {
        this.annonce.value.image = this.urlImageUpdate;
      }
      const loading = await this.loadingController.create({
        duration: 2000,
      });
      await loading.present();
      this.plantesService.updatePlante(
        this.id,
        this.urlImage,
        this.annonce.value
      );
      await loading.onDidDismiss();
      const alert = await this.alertController.create({
        header: 'Félicitation',
        message: 'La ou les modification(s) on ou à bien était éffectuer',
        buttons: ['OK'],
      });
      await alert.present();
      this.modalController.dismiss({
        dismissed: true,
      });
    }
  }
  //---------------------------------------------------------------------------------//
  //-------------------------client--------------------------------------------------//
  //---------------------------------------------------------------------------------//
  addClient() {}

  segmentChanged(ev: any) {
    this.affichage = ev.detail.value;
  }

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
