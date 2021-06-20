import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
  {
    title: 'sous-menu',
    url: '/menu/accueil',
    icon: 'mail'
  },
    {
      title: 'menu',
      children:[
        {
          title: 'sous-menu',
          url: '/menu/fruits',
          icon: 'mail'
        },
        {
          title: 'sous-menu',
          url: '/menu/fruits',
          icon: 'mail'
        }
      ]
    }
  ];

  constructor() {}
}
