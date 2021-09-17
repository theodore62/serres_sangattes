import { Component, ComponentRef, OnInit } from '@angular/core';

import { first } from 'rxjs/Operators';
// formulaire
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
// base de données

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IonicToastService } from '../services/ionic-toast.service';

// service
import { PlantesService } from '../services/plante/plantes.service';
//model
import { Plante } from '../models/plante.model';

//camera
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { IonSelect } from '@ionic/angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-ajouter-fleur',
  templateUrl: './ajouter-fleur.page.html',
  styleUrls: ['./ajouter-fleur.page.scss'],
})
export class AjouterFleurPage implements OnInit {
  public annonce: FormGroup;
  public isSubmitted = false;
  public items: Observable<any[]>;
  public message: string;
  public epoque: string;
  //url image à vide pour vérifiaction
  // ../../assets/images/img.png
  public image = '';
  public imagePath: string;
  public upload: any;
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
  public url: string;
  public buttonColor: string;

  @ViewChild('type') theSelectObject: IonSelect;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private afDB: AngularFireDatabase,
    private firestore: AngularFirestore,
    private toastCtrl: IonicToastService,
    private planteList: PlantesService,
    private camera: Camera,
    private afSG: AngularFireStorage,
    private loadingController: LoadingController
  ) {
    this.items = this.firestore.collection('Variete').valueChanges();
    this.buttonColor = '#9eb7d2';

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
  }

  get errorControl() {
    return this.annonce.controls;
  }

  ngOnInit() {
    if (this.epoque == null) {
      this.epoqueFleuraison();
    }
    this.annonce = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      variete: ['', [Validators.required]],
      couleur: ['', [Validators.required]],
      fleuraison: ['', [Validators.required]],
      hauteur: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      de: ['', [Validators.required]],
      a: ['', [Validators.required]],
    });
  }

  ajouter() {
    this.router.navigateByUrl('/ajouter-varieter');
  }
  optionsfn() {
    this.epoque = this.theSelectObject.value;
  }

  async epoqueFleuraison() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'type de la plante',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Fleur',
          value: 'Fleur',
          handler: () => {
            // console.log('Radio 1 selected');
          },
          checked: true,
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Fruit',
          value: 'Fruit',
          handler: () => {
            // console.log('Radio 2 selected');
          },
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Legumes',
          value: 'Legumes',
          handler: () => {
            // console.log('Radio 3 selected');
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (value) => {
            // console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (data1) => {
            console.log(data1);
            this.epoque = data1;
          },
        },
      ],
    });
    await alert.present();
  }
  addAnnonce() {
    console.log(this.annonce);
    if (!this.annonce.valid) {
      this.message = 'Veuillez veuillez compléter le formulaire';
      this.toastCtrl.showToast(this.message);
    } else {
      this.plante.nom = this.annonce.value.nom;
      this.plante.variete = this.annonce.value.variete;
      this.plante.couleur = this.annonce.value.couleur;
      this.plante.fleuraison = this.annonce.value.fleuraison;
      this.plante.hauteur = this.annonce.value.hauteur;
      this.plante.description = this.annonce.value.description;
      this.plante.type = this.annonce.value.type;
      this.plante.de = this.annonce.value.de;
      this.plante.a = this.annonce.value.a;
      this.url = this.image;
      console.log(this.url);
      if (this.url !== '') {
        console.log('ici');
        this.imagePath = new Date().getTime() + '.jpg';
        this.uploadFirebase();
        this.planteList.postPlanteList(this.plante).then((retour) => {
          if (retour.id == null) {
            this.message = "les données n'ont pas pu être enregistrées";
            this.toastCtrl.showToast(this.message);
          } else {
            this.firestore.doc(`Plantes/${retour.id}`).set({
              id: retour.id,
              nom: this.plante.nom,
              variete: this.plante.variete,
              couleur: this.plante.couleur,
              fleuraison: this.plante.fleuraison,
              hauteur: this.plante.hauteur,
              description: this.plante.description,
              type: this.plante.type,
              de: this.plante.de,
              a: this.plante.a,
              image: this.imagePath,
            });
          }
        });
      } else {
        this.message = 'veuilliez rajouter une image';
        this.toastCtrl.showToast(this.message);
      }
    }
  }

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
    const loading = await this.loadingController.create({
      duration: 2000,
    });
    //rajouter une conditions si url est vide de image pour bloquer la validation
    await loading.present();
    this.upload = this.afSG
      .ref(this.imagePath)
      .putString(this.image, 'data_url');
    this.upload.then(async () => {
      await loading.onDidDismiss();
      this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
      const alert = await this.alertController.create({
        header: 'Félicitation',
        cssClass: ['color:white'],
        message: 'Les données ont bien été enregistrées',
        buttons: ['OK'],
      });
      await alert.present();
    });
  }
}
