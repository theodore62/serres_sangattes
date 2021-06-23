import { Component, OnInit } from '@angular/core';

// formulaire
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

// base de données
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajouter-fleur',
  templateUrl: './ajouter-fleur.page.html',
  styleUrls: ['./ajouter-fleur.page.scss'],
})
export class AjouterFleurPage implements OnInit {
  private annonce: FormGroup;
  private isSubmitted = false;

  private items: Observable<any[]>;


  constructor(
    private formBuilder: FormBuilder,
    private afDB: AngularFireDatabase,
    private firestore: AngularFirestore
  ) { }

  get errorControl() {
    return this.annonce.controls;
  }

  ngOnInit() {
    this.items = this.firestore.collection('Items').valueChanges();
    console.log('items:'+ this.items );

    this.annonce = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      info: ['', Validators.minLength(2)],
    });
  }


  addAnnonce() {

    console.log(this.annonce);
    if (!this.annonce.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log('ici');
      // this.afDB.list('Plantes/').push({
      //   pseudo: 'drissas'
      // });
      this.firestore.collection('Plantes').add({
        nom: this.annonce.value.titre
      });
    }



  }



}
