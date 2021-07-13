import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  public appPages = [
    {
      title: 'accueil',
      url: '/menu/accueil',
      icon: 'home'
    },
    {
      title: 'Ajouter des plantes',
      url: '/menu/accueil',
      icon: 'add-circle-outline'
    },
      {
        title: 'Fleurs',
        children:[
          {
            title: 'Annuelles',
            url: '/menu/fleurs',
            icon: ''
          },
          {
            title: 'Bisannuelles',
            url: '/menu/fleurs',
            icon: ''
          },
          {
            title: 'Vivaces',
            url: '/menu/fleurs',
            icon: ''
          },
          {
            title: 'Aromatiques',
            url: '/menu/fleurs',
            icon: ''
          }
        ]
      },
      {
        title: 'Fruits',
        children:[
          {
            title: 'Ete',
            url: '/menu/fruits',
            icon: ''
          },
          {
            title: 'Hiver',
            url: '/menu/fruits',
            icon: ''
          }
        ]
      },
      {
        title: 'Légumes',
        children:[
          {
            title: 'Ete',
            url: '/menu/legumes',
            icon: ''
          },
          {
            title: 'Hiver',
            url: '/menu/legumes',
            icon: ''
          }
        ]
      }
    ];



  constructor() {
  }



}
