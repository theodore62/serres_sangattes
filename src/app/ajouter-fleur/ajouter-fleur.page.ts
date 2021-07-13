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
  selector: 'app-ajouter-fleur',
  templateUrl: './ajouter-fleur.page.html',
  styleUrls: ['./ajouter-fleur.page.scss'],
})
export class AjouterFleurPage implements OnInit {
  private annonce: FormGroup;
  private isSubmitted = false;
  private items: Observable<any[]>;

  constructor(
    private router: Router,
    private alertController: AlertController,
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
      nom: ['', [Validators.required, Validators.minLength(2)]],
      variete: ['', [Validators.required]],
      couleur: ['', [Validators.required]],
      depotage: ['', [Validators.required]],
      fleur: ['', [Validators.required]],
      hauteur: ['', [Validators.required]],
      ramification: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      caract: ['', [Validators.required]],
    });
  }

  ajouter(){
    // this.dataService.setData( 'idAnnonce',idAnnonce);
    this.router.navigateByUrl('/ajouter-varieter');
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
        nom: this.annonce.value.titre,
        variete: this.annonce.value.variete,
        couleur: this.annonce.value.couleur,
        depotage: this.annonce.value.depotage,
        fleur: this.annonce.value.fleur,
        hauteur: this.annonce.value.hauteur,
        ramification: this.annonce.value.ramification,
        description: this.annonce.value.description,
        type: this.annonce.value.type,
        caract: this.annonce.value.caract,
      });
    }



  }



}
