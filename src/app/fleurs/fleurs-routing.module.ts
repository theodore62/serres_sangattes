import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FleursPage } from './fleurs.page';

const routes: Routes = [
  {
    path: '',
    component: FleursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FleursPageRoutingModule {}
