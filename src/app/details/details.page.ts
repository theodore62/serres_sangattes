import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject }  from '@angular/fire/database';
// service
import { PlantesService } from '../services/plante/plantes.service';
import { Plante } from '../models/plante.model';

import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private id: any;
  private planteDetail: any = [];

  constructor(
    private dataService: DataService,
    private plantesService: PlantesService,
    private afSG: AngularFireStorage
  ) { }

  ngOnInit() {
    this.id = this.dataService.getData('id');
    this.plantesService.getDetailPlante(this.id).then(detailPlante =>{
      this.planteDetail.push(detailPlante);
      console.log(this.planteDetail);
      this.afSG.ref('/'+detailPlante.image).getDownloadURL().subscribe(imgUrl => {
        this.planteDetail[0].image = imgUrl;
        console.log(this.planteDetail);
      });
    });
  }

}
