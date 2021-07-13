import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterVarieterPage } from './ajouter-varieter.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterVarieterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterVarieterPageRoutingModule {}
