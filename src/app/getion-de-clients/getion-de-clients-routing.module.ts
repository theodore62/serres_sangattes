import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetionDeClientsPage } from './getion-de-clients.page';

const routes: Routes = [
  {
    path: '',
    component: GetionDeClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetionDeClientsPageRoutingModule {}
