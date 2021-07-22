import { Injectable } from '@angular/core';
// model
import { Plante } from '../../models/plante.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/Operators';
@Injectable({
  providedIn: 'root',
})
export class PlantesService {

  public planteList = this.firestore.collection<Plante>('Plantes');

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) {}

  getPlanteList() {
    return  this.planteList.valueChanges().pipe(first()).toPromise();
  }

  postPlanteList(plante: Plante) {
    return this.planteList.add(plante);
  }

  getDetailPlante(id: Plante){
    const url = '/'+id;
    console.log(url);
    return this.planteList.doc(url).valueChanges().pipe(first()).toPromise();
  }

}
