import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  fleurs(){
    // this.dataService.setData( 'idAnnonce',idAnnonce);
    this.router.navigateByUrl('/fleurs');
  }

  fruits(){
    // this.dataService.setData( 'idAnnonce',idAnnonce);
    this.router.navigateByUrl('/fruits');
  }

  legumes(){
    // this.dataService.setData( 'idAnnonce',idAnnonce);
    this.router.navigateByUrl('/legumes');
  }

  ajouter(){
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
          value: 'value1',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Bisannuelles',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Vivaces',
          value: 'value3',
          handler: () => {
            console.log('Radio 3 selected');
        }
        },
        {
            name: 'radio4',
            type: 'radio',
            label: 'Aromatiques',
            value: 'value4',
            handler: () => {
              console.log('Radio 3 selected');
            },
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            this.fleurs();
          }
        }
      ]
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
          value: 'value1',
          handler: () => {
            console.log(data);
            console.log('Radio 1 selected');
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Hiver',
          value: 'value2',
          handler: () => {
            console.log('Radio 2 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            if(data == 'fruits'){
              this.fruits();
            }else{
              this.legumes();
            }
    
          }
        }
      ]
    });

    await alert.present();
  }





}
