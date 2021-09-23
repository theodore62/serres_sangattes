import { Injectable } from '@angular/core';
// model
import { Commande } from '../../models/commande.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/Operators';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  public ref = 'Commandes';
  public commande = this.firestore.collection<Commande>('Commandes');
  constructor(
    private firestore: AngularFirestore,
    private afSG: AngularFireStorage
  ) {}
  getCommandesList() {
    return this.commande.valueChanges().pipe(first()).toPromise();
  }
  postCommande(commande: Commande) {
    return this.commande.add(commande);
  }
  deleteCommande(id: Commande) {
    const url = '/' + id;
    return this.commande.doc(url).delete();
  }
}
