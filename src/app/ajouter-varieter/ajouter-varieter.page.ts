import { Component, OnInit } from '@angular/core';

// formulaire
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// base de données
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IonicToastService } from '../services/ionic-toast.service';
@Component({
  selector: 'app-ajouter-varieter',
  templateUrl: './ajouter-varieter.page.html',
  styleUrls: ['./ajouter-varieter.page.scss'],
})
export class AjouterVarieterPage implements OnInit {
  public varieter: FormGroup;
  public isSubmitted = false;
  public items: Observable<any[]>;
  public message: string;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private afDB: AngularFireDatabase,
    private firestore: AngularFirestore,
    private toastCtrl: IonicToastService,
  ) {}

  ngOnInit() {
    this.varieter = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get errorControl() {
    return this.varieter.controls;
  }

  addVarieter() {
    if (!this.varieter.valid) {
      this.message = 'enter une valeur dans le champ';
      return false;
    } else {
      this.firestore
        .collection('Variete')
        .add({
          nom: this.varieter.value.nom,
        })
        .then((retour) => {
          if (retour.id == null) {
            this.message = "la variétèe n'a pas pu être enregistré ";
            this.toastCtrl.showToast(this.message);
            
          } else {
            this.message ='la variétèe à était enregistré vous pouvez en saisir une autre';
            this.toastCtrl.showToast(this.message);
          }
        });
    }
  }


}
