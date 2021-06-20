import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterFleurPage } from './ajouter-fleur.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterFleurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterFleurPageRoutingModule {}
