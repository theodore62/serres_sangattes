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
// service
import { VarieteService } from '../services/variete/variete.service';
//model
import { Variete } from '../models/plante.model';
@Component({
  selector: 'app-ajouter-varieter',
  templateUrl: './ajouter-varieter.page.html',
  styleUrls: ['./ajouter-varieter.page.scss'],
})
export class AjouterVarieterPage implements OnInit {
  public affichage: any;
  public varieterFrom: FormGroup;
  public isSubmitted = false;
  public items: Observable<any[]>;
  public message: string;
  public datas: any;
  public varieteList: any;
  public tableauVariete: any = [];
  public variete: Variete = {
    id: '',
    nom: '',
  };

  constructor(
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private afDB: AngularFireDatabase,
    private firestore: AngularFirestore,
    private toastCtrl: IonicToastService,
    private varieteService: VarieteService
  ) {}

  async ngOnInit() {
    if (this.affichage === undefined) {
      this.affichage = 'liste';
    }
    this.varieterFrom = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
    });
    this.varieteList = await this.initializeItems();
  }
  segmentChanged(ev: any) {
    this.affichage = ev.detail.value;
  }

  get errorControl() {
    return this.varieterFrom.controls;
  }

  addVarieter() {
    if (!this.varieterFrom.valid) {
      // this.variete.nom = this.varieterFrom.value.nom;
      this.message = 'enter une valeure dans le champs';
      this.toastCtrl.showToast(this.message);
    } else {
      this.variete.nom = this.varieterFrom.value.nom;
      this.varieteService.postPlanteList(this.variete).then((retour) => {
        if (retour.id == null) {
          this.message = 'la varietée n\'a pas pu être enregistrée';
          this.toastCtrl.showToast(this.message);
        } else {
          this.firestore.doc(`Variete/${retour.id}`).set({
            id: retour.id,
            nom: this.varieterFrom.value.nom,
          });
          this.message = 'la varietée à était enregistré';
          this.toastCtrl.showToast(this.message);
        }
      });
    }
  }

  async filterList(ev: any) {
    this.varieteList = await this.initializeItems();
    const searchTerm = ev.srcElement.value;

    if (!searchTerm) {
      return;
    }
    this.varieteList = this.varieteList.filter((currentPlant) => {
      if (currentPlant.nom && searchTerm) {
        return (
          currentPlant.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }

  async doRefresh(event) {
    const teste = await this.initializeItems();
    console.log('Begin async operation');
    setTimeout(() => {
      this.varieteList = teste;
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async initializeItems(): Promise<any> {
    this.tableauVariete = [];
    this.tableauVariete = await this.varieteService.getVarieteList();
    console.log(this.tableauVariete);
    return this.tableauVariete;
  }

  async delete(idPlante) {
    this.varieteService.deleteVariete(idPlante);
    this.tableauVariete = [];
    this.varieteList = await this.initializeItems();
    this.message = 'la varietée à était supprimer ';
    this.toastCtrl.showToast(this.message);
  }
}
