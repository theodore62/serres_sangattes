import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore/';
import { PlantesService } from './services/plante/plantes.service';


import { Camera } from '@ionic-native/camera/ngx';

export const firebaseConfig = {
  apiKey: 'AIzaSyC6M9FeUa5BavwZorenCX_dq6mPFLJvH4Y',
  authDomain: 'serres-sangatte.firebaseapp.com',
  databaseURL:'https://serres-sangatte-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'serres-sangatte',
  storageBucket: 'serres-sangatte.appspot.com',
  messagingSenderId: '844932799354',
  appId: '1:844932799354:web:f468a96ec971f9357a94c3',
  measurementId: 'G-8LZGJY7CX3',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    PlantesService,
    Camera,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
