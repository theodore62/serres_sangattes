import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  constructor(
    private router: Router,
    private dataService: DataService,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  fleurs(data) {
    this.dataService.setData('data', data);
    this.router.navigateByUrl('/fleurs');
  }

  fruits(data) {
    this.dataService.setData('data', data);
    this.router.navigateByUrl('/fruits');
  }

  legumes(data) {
    this.dataService.setData('data',data);
    this.router.navigateByUrl('/legumes');
  }

  ajouter() {
    // this.dataService.setData( 'idAnnonce',idAnnonce);
    this.router.navigateByUrl('/ajouter-fleur');
  }

  async alertRadioFleurs() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Annuelles',
          value: 'Annuelles',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true,
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Bisannuelles',
          value: 'Bisannuelles',
          handler: () => {
            console.log('Radio 2 selected');
          },
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Vivaces',
          value: 'Vivaces',
          handler: () => {
            console.log('Radio 3 selected');
          },
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Aromatiques',
          value: 'Aromatiques',
          handler: () => {
            console.log('Radio 3 selected');
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (value) => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (data1) => {
            console.log('Confirm Ok');
            this.fleurs(data1);
          },
        },
      ],
    });
    await alert.present();
  }

  async alertRadioFruitLegumes(data) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Ete',
          value: 'Ete',
          handler: () => {
            console.log(data);
            console.log('Radio 1 selected');
          },
          checked: true,
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Hiver',
          value: 'Hiver',
          handler: () => {
            console.log('Radio 2 selected');
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        { 
          text: 'Ok',
          handler: (data2) => {
            console.log(data2);
            if (data === 'fruits') {
              this.fruits(data2);
            } else {
              this.legumes(data2);
            }
          },
        },
      ],
    });
    await alert.present();
  }
}
