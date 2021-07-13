import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'accueil',
      url: './accueil',
      icon: 'home'
    },
    {
      title: 'Ajouter des plantes',
      url: './ajouter-fleur',
      icon: 'add-circle-outline'
    },
    {
      title: 'Ajouter variéters',
      url: './ajouter-varieter',
      icon: 'add-circle-outline'
    },
      {
        title: 'Fleurs',
        children:[
          {
            title: 'Annuelles',
            url: './fleurs',
            icon: ''
          },
          {
            title: 'Bisannuelles',
            url: './fleurs',
            icon: ''
          },
          {
            title: 'Vivaces',
            url: './fleurs',
            icon: ''
          },
          {
            title: 'Aromatiques',
            url: './fleurs',
            icon: ''
          }
        ]
      },
      {
        title: 'Fruits',
        children:[
          {
            title: 'Ete',
            url: './fruits',
            icon: ''
          },
          {
            title: 'Hiver',
            url: './fruits',
            icon: ''
          }
        ]
      },
      {
        title: 'Légumes',
        children:[
          {
            title: 'Ete',
            url: './legumes',
            icon: ''
          },
          {
            title: 'Hiver',
            url: './legumes',
            icon: ''
          }
        ]
      }
    ];

  constructor() {}
}
