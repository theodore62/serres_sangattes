import { Component, OnInit } from '@angular/core';
import { DataService } from '../../src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public acceuil = [
    {
      title: 'accueil',
      url: './accueil',
      icon: 'home',
    },
  ];
  public appPages = [
    // {
    //   title: 'accueil',
    //   url: './accueil',
    //   icon: 'home',
    // },
    {
      title: 'Gestion de commandes',
      url: './gestion-commandes',
      icon: 'settings-outline',
    },
    {
      title: 'Gestion de clients',
      url: './getion-de-clients',
      icon: 'settings-outline',
    },
    {
      title: 'Gestion de Variétés',
      url: './ajouter-varieter',
      icon: 'settings-outline',
    },
    {
      title: 'Ajouter une plante',
      url: './ajouter-fleur',
      icon: 'add-circle-outline',
    },
  ];
  public plantesAromatiques = [
    {
      title: 'Plantes aromatiques',
      open: false,
      data: 'Aromatiques',
      url: '/fleurs',
    },
  ];
  public labels = [
    {
      title: 'Plantes ornementales',
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
      ],
    },
    {
      title: 'Plantes fruitier',
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
      title: 'Plantes potagères',
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
  ngOnInit() {}

  page(data, url) {
    console.log(url);
    this.dataService.setData('data', data);
    this.router.navigateByUrl(url);
  }
}
