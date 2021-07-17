import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// base de données
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IonicToastService } from '../services/ionic-toast.service';
import { DataService } from '../services/data.service';

// service
import { PlantesService } from '../services/plante/plantes.service';
//model
import { Plante } from '../models/plante.model';
@Component({
  selector: 'app-fleurs',
  templateUrl: './fleurs.page.html',
  styleUrls: ['./fleurs.page.scss'],
})
export class FleursPage implements OnInit {
  private listeItems: any[];
  private plante: any;
  private listeCard = Array.from(document.querySelector('div').children);

  private datas: any;
  constructor(
    private firestore: AngularFirestore,
    private dataService: DataService,
    private router: Router,
    private plantesService: PlantesService
  ) {}

  ngOnInit() {
    this.datas = this.dataService.getData('data');
    const searchbar = document.querySelector('ion-searchbar');
    if (this.dataService.getData('data')) {
      this.datas = this.dataService.getData('data');
      this.plante = this.plantesService
        .getPlanteList()
        .valueChanges()
        .subscribe(
          (res) => {
            console.log(res);
            this.listeItems = res;
          },
          (err) => {
            console.log(err);
          }
        );
      // console.log(this.listeItems);
    
      const value  = searchbar.addEventListener('ionInput', this.handleInput);
      console.log(value);

    }
  }
  handleInput(event) {
    const query = event.target.value.toLowerCase();
    return query;
  }
  // teste(){
  //   requestAnimationFrame(() => {
  //     console.log(this.listeCard);
  //     this.listeCard.forEach((item) => {
  //       console.log(item);
  //       const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
  //       console.log(shouldShow);
  //       // shouldShow.style.display = shouldShow ? 'block' : 'none';
  //     });
  //   });
  // }


}
