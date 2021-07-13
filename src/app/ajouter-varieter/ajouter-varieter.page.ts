import { Component, OnInit } from '@angular/core';

// formulaire
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
// base de données
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajouter-varieter',
  templateUrl: './ajouter-varieter.page.html',
  styleUrls: ['./ajouter-varieter.page.scss'],
})
export class AjouterVarieterPage implements OnInit {
  private varieter: FormGroup;
  private isSubmitted = false;
  private items: Observable<any[]>;


  constructor(
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private afDB: AngularFireDatabase,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.varieter = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  addVarieter() {
    console.log(this.varieter);
    if (!this.varieter.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log('ici');
      // this.afDB.list('Plantes/').push({
      //   pseudo: 'drissas'
      // });
      this.firestore.collection('Variete').add({
        nom: this.varieter.value.nom,
      });
    }
  }


}
