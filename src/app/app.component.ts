import { Component } from '@angular/core';
import { DataService } from '../../src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
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
      icon: 'home',
    },
    {
      title: 'Ajouter des plantes',
      url: './ajouter-fleur',
      icon: 'add-circle-outline',
    },
    {
      title: 'Ajouter variéters',
      url: './ajouter-varieter',
      icon: 'add-circle-outline',
    },
    {
      title: 'Fleurs',
      open: false,
      children: [
        {
          title: 'Annuelles',
          data: 'Annuelles',
          url: '/fleurs',
        },
        {
          title: 'Bisannuelles',
          data: 'Bisannuelles',
          url: '/fleurs',
        },
        {
          title: 'Vivaces',
          data: 'Vivaces',
          url: '/fleurs',
        },
        {
          title: 'Aromatiques',
          data: 'Vivaces',
          url: '/fleurs',
        },
      ],
    },
    {
      title: 'Fruits',
      children: [
        {
          title: 'Ete',
          data: 'Ete',
          url: '/fruits',
        },
        {
          title: 'Hiver',
          data: 'hiver',
          url: '/fruits',
        },
      ],
    },
    {
      title: 'Légumes',
      children: [
        {
          title: 'Ete',
          data: 'Ete',
          url: '/legumes',
        },
        {
          title: 'Hiver',
          data: 'hiver',
          url: '/legumes',
        },
      ],
    },
  ];

  constructor(private dataService: DataService, private router: Router) {}

  page(data, url) {
    console.log(url);
    this.dataService.setData('data', data);
    this.router.navigateByUrl(url);
  }
}
