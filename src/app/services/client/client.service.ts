import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/Operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Client } from '../../models/client.model';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public ref = 'Client';
  public client = this.firestore.collection<Client>('Client');

  constructor(
    private firestore: AngularFirestore,
    private afSG: AngularFireStorage
  ) {}
  getListClients() {
    return this.client.valueChanges();
    // return this.client.valueChanges().pipe(first()).toPromise();
  }

  getClientsList() {
    return this.client.valueChanges().pipe(first()).toPromise();
  }
  postClient(client: Client) {
    return this.client.add(client);
  }
  getClient(id) {
    const url = '/' + id;
    return this.client.doc(url).valueChanges().pipe(first()).toPromise();
  }
  updateClient(id, values) {
    const url = '/' + id;
    this.client.doc(url).update(values);
    return;
  }
  deleteClient(id: Client) {
    const url = '/' + id;
    return this.client.doc(url).delete();
  }
}
