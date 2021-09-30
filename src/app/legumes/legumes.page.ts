import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// base de données
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IonicToastService } from '../services/ionic-toast.service';
import { DataService } from '../services/data.service';
import { first } from 'rxjs/Operators';
// service
import { PlantesService } from '../services/plante/plantes.service';
//model
import { Plante } from '../models/plante.model';
import {
  AlertController,
  IonRouterOutlet,
  ModalController,
} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.page.html',
  styleUrls: ['./legumes.page.scss'],
})
export class LegumesPage implements OnInit {
  public datas: any;
  public planteList: any;
  public tableauPlante: any = [];
  constructor(
    private firestore: AngularFirestore,
    private dataService: DataService,
    private router: Router,
    private plantesService: PlantesService,
    private afSG: AngularFireStorage,
    private alertController: AlertController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  async ngOnInit() {
    this.datas = this.dataService.getData('data');
    this.planteList = await this.initializeItems();
  }

  async doRefresh(event) {
    const teste = await this.initializeItems();
    console.log('Begin async operation');
    setTimeout(() => {
      this.planteList = teste;
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  async initializeItems(): Promise<any> {
    this.tableauPlante = [];
    const planteListe = await this.plantesService.getPlanteList();
    planteListe.forEach((resulta) => {
      if (resulta.fleuraison === this.datas && resulta.type === 'Legumes') {
        console.log(resulta.image);
        this.afSG
          .ref('/' + resulta.image)
          .getDownloadURL()
          .subscribe((imgUrl) => {
            resulta.image = imgUrl;
            this.tableauPlante.push(resulta);
          });
      }
    });
    console.log(this.tableauPlante);

    return this.tableauPlante;
  }

  async filterList(ev: any) {
    this.planteList = await this.initializeItems();
    const searchTerm = ev.srcElement.value;

    if (!searchTerm) {
      return;
    }
    this.planteList = this.planteList.filter((currentPlant) => {
      if (currentPlant.nom && searchTerm) {
        return (
          currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1 ||
          currentPlant.variete.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1 ||
          currentPlant.couleur.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1 ||
          currentPlant.hauteur.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1 ||
          currentPlant.de.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }
  detail(idPlante) {
    this.dataService.setData('id', idPlante);
    this.router.navigateByUrl('/details');
  }
  async delete(idPlante, url) {
    this.afSG.refFromURL(url).delete();
    this.plantesService.deletePlante(idPlante);
    this.tableauPlante = [];
    this.planteList = await this.initializeItems();
    console.log(this.planteList);
  }

  async update(idPlante, anneeFleuraison) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: { data:'plante', id: idPlante, fleuraison: anneeFleuraison },
    });
    return await modal.present();
  }
}
