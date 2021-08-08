import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
} from '@ionic/angular';
// service
import { PlantesService } from '../services/plante/plantes.service';
//model
import { Plante } from '../models/plante.model';
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
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  private id: Plante;
  private planteDetail: any = [];
  private annonce: FormGroup;
  private image = '';
  private imagePath: string;
  private epoque: string;
  private varieters: Observable<any[]>;
  private message: string;
  private plante: Plante = {
    id: '',
    nom: '',
    variete: '',
    couleur: '',
    fleuraison: '',
    hauteur: '',
    description: '',
    type: '',
    image: '',
  };

  constructor(
    private alertController: AlertController,
    private afSG: AngularFireStorage,
    private plantesService: PlantesService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private camera: Camera,
    private firestore: AngularFirestore
  ) {}

  get errorControl() {
    return this.annonce.controls;
  }

  ngOnInit() {
    this.varieters = this.firestore.collection('Variete').valueChanges();

    this.annonce = this.formBuilder.group({
      nom: ['', [Validators.required]],
      variete: ['', [Validators.required]],
      couleur: ['', [Validators.required]],
      fleuraison: ['', [Validators.required]],
      hauteur: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
    this.plantesService.getDetailPlante(this.id).then((detailPlante) => {
      this.planteDetail.push(detailPlante);
      this.afSG
        .ref('/' + detailPlante.image)
        .getDownloadURL()
        .subscribe((imgUrl) => {
          this.planteDetail[0].image = imgUrl;
          this.planteDetail.forEach((items) => {
            this.epoque = items.type;
            if (this.epoque !== 'Fleur') {
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
              document.getElementById('type').setAttribute('value', items.type);
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
              document.getElementById('type').setAttribute('value', items.type);
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
          });
        });
    });
  }

  closeModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
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
  addAnnonce() {
    console.log(this.annonce);
    if (!this.annonce.valid) {
      this.message = 'enter une valeur dans le champ';
      console.log('Please provide all the required values!');
      return false;
    } else {
      // this.plante.nom = this.annonce.value.nom;
      // this.plante.variete = this.annonce.value.variete;
      // this.plante.couleur = this.annonce.value.couleur;
      // this.plante.fleuraison = this.annonce.value.fleuraison;
      // this.plante.hauteur = this.annonce.value.hauteur;
      // this.plante.description = this.annonce.value.description;
      // this.plante.type = this.annonce.value.type;
      // this.imagePath = new Date().getTime() + '.jpg';
      // this.uploadFirebase();
      this.plantesService.updatePlante(this.id, this.annonce.value);
      console.log(this.message);

      // this.message ='la plante à était enregistré vous pouvez en saisir une autre';
      // this.toastCtrl.showToast(this.message);
    }
  }
}
