import { Injectable } from '@angular/core';
// model
import { Plante } from '../../models/plante.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PlantesService {
  private planteList = this.firestore.collection<Plante>('Plantes');

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) {}

  getPlanteList() {
    return this.planteList;
  }

  postPlanteList(plante: Plante) {
    return this.planteList.add(plante);
  }

}
