import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter-fleur',
  templateUrl: './ajouter-fleur.page.html',
  styleUrls: ['./ajouter-fleur.page.scss'],
})
export class AjouterFleurPage implements OnInit {
  private annonce: FormGroup;
  private isSubmitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private afDB: AngularFireDatabase
  ) { }

  get errorControl() {
    return this.annonce.controls;
  }

  ngOnInit() {
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
      this.afDB.list('Plantes/').push({
        pseudo: 'drissas'
      });
    }



  }



}
