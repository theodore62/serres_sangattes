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
import {  Validators,  FormBuilder,  FormGroup,  FormControl,} from '@angular/forms';
//camera
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  private id: Plante;
  private planteDetail: any = [];
  private annonce: FormGroup;
  private image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  private imagePath: string;


  constructor(
    private afSG: AngularFireStorage,
    private plantesService: PlantesService,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private camera: Camera,
    ) {}

  get errorControl() {
    return this.annonce.controls;
  }

  ngOnInit() {
    this.annonce = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      variete: ['', [Validators.required]],
      couleur: ['', [Validators.required]],
      fleuraison: ['', [Validators.required]],
      hauteur: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });

    this.plantesService.getDetailPlante(this.id).then(detailPlante =>{
      this.planteDetail.push(detailPlante);
      this.afSG.ref('/'+detailPlante.image).getDownloadURL().subscribe(imgUrl => {
        this.planteDetail[0].image = imgUrl;
        console.log(this.planteDetail);
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
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  return await this.camera.getPicture(options);
}
addAnnonce() {}

}
