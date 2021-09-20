import { Injectable } from '@angular/core';
// model
import { Variete } from '../../models/plante.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/Operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class VarieteService {

  public ref = 'Variete';
  public varieteList = this.firestore.collection<Variete>('Variete');

  constructor(
    private firestore: AngularFirestore,
    private afSG: AngularFireStorage
  ) { }

  getVarieteList() {
    return this.varieteList.valueChanges().pipe(first()).toPromise();
  }

  postPlanteList(variete: Variete) {
    return this.varieteList.add(variete);
  }
  deleteVariete(id: Variete) {
    const url = '/' + id;
    return this.varieteList.doc(url).delete();
  }

}
