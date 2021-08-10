import { Injectable } from '@angular/core';
// model
import { Plante } from '../../models/plante.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/Operators';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class PlantesService {
  private ref = 'Plantes';
  public planteList = this.firestore.collection<Plante>('Plantes');

  constructor(
    private firestore: AngularFirestore,
    private afSG: AngularFireStorage
  ) {}

  getPlanteList() {
    return this.planteList.valueChanges().pipe(first()).toPromise();
  }

  postPlanteList(plante: Plante) {
    return this.planteList.add(plante);
  }

  getDetailPlante(id: Plante) {
    const url = '/' + id;
    return this.planteList.doc(url).valueChanges().pipe(first()).toPromise();
  }
  deletePlante(id: Plante) {
    const url = '/' + id;
    return this.planteList.doc(url).delete();
  }
  updatePlante(id: Plante, urlImage, values: Plante) {
    const url = '/' + id;
    this.planteList.doc(url).update(values);
    this.afSG.refFromURL(urlImage).delete();
    return;
  }
}
