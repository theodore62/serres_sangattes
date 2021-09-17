import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DBService {
  public db = {};

  constructor() {}

  public databaseDev() {
    return (this.db = {
      apiKey: 'AIzaSyC6M9FeUa5BavwZorenCX_dq6mPFLJvH4Y',
      authDomain: 'serres-sangatte.firebaseapp.com',
      databaseURL:
        'https://serres-sangatte-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'serres-sangatte',
      storageBucket: 'serres-sangatte.appspot.com',
      messagingSenderId: '844932799354',
      appId: '1:844932799354:web:f468a96ec971f9357a94c3',
      measurementId: 'G-8LZGJY7CX3',
    });
  }

 public databaseProd() {
    return (this.db = {
      apiKey: 'AIzaSyC6M9FeUa5BavwZorenCX_dq6mPFLJvH4Y',
      authDomain: 'serres-sangatte.firebaseapp.com',
      databaseURL:
        'https://serres-sangatte-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'serres-sangatte',
      storageBucket: 'serres-sangatte.appspot.com',
      messagingSenderId: '844932799354',
      appId: '1:844932799354:web:f468a96ec971f9357a94c3',
      measurementId: 'G-8LZGJY7CX3',
    });
  }
}
