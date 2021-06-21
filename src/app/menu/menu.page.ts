import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

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
            icon: 'mail'
          },
          {
            title: 'Bisannuelles',
            url: '/menu/fleurs',
            icon: 'mail'
          },
          {
            title: 'Vivaces',
            url: '/menu/fleurs',
            icon: 'mail'
          },
          {
            title: 'Aromatiques',
            url: '/menu/fleurs',
            icon: 'mail'
          }
        ]
      },
      {
        title: 'Fruits',
        children:[
          {
            title: 'Ete',
            url: '/menu/fruits',
            icon: 'mail'
          },
          {
            title: 'Hiver',
            url: '/menu/fruits',
            icon: 'mail'
          }
        ]
      },
      {
        title: 'Légumes',
        children:[
          {
            title: 'Ete',
            url: '/menu/legumes',
            icon: 'mail'
          },
          {
            title: 'Hiver',
            url: '/menu/legumes',
            icon: 'mail'
          }
        ]
      }
    ];



  constructor() { 

  }

  ngOnInit() {


  }

}
