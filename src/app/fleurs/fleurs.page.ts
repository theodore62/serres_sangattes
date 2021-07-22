import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// base de données
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IonicToastService } from '../services/ionic-toast.service';
import { DataService } from '../services/data.service';

import { first } from 'rxjs/Operators';

// service
import { PlantesService } from '../services/plante/plantes.service';
//model
import { Plante } from '../models/plante.model';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-fleurs',
  templateUrl: './fleurs.page.html',
  styleUrls: ['./fleurs.page.scss'],
})
export class FleursPage implements OnInit {
  public datas: any;
  public planteList: any;
  public tableauPlante: any = [];

  constructor(
    private firestore: AngularFirestore,
    private dataService: DataService,
    private router: Router,
    private plantesService: PlantesService
  ) {}

  async ngOnInit() {
    this.datas = this.dataService.getData('data');
    this.planteList = await this.initializeItems();
  }

  async initializeItems(): Promise<any> {
    if(this.tableauPlante.length <= 0){
      const planteListe = await this.plantesService.getPlanteList();
      planteListe.forEach(resulta =>{
        if(resulta.fleuraison === this.datas  ){
          this.tableauPlante.push(resulta);
        }
    });
    }

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
          currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1 
          ||
          currentPlant.variete.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          ||
          currentPlant.couleur.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
          ||
          currentPlant.hauteur.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }
  detail(){

  }
}
