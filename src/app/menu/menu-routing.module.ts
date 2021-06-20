import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/menu/accueil',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'fleurs',
        loadChildren: () => import('../fleurs/fleurs.module').then( m => m.FleursPageModule)
      },
      {
        path: 'fruits',
        loadChildren: () => import('../fruits/fruits.module').then( m => m.FruitsPageModule)
      },
      {
        path: 'legumes',
        loadChildren: () => import('../legumes/legumes.module').then( m => m.LegumesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
