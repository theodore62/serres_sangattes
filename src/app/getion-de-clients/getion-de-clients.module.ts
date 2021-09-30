import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetionDeClientsPageRoutingModule } from './getion-de-clients-routing.module';

import { GetionDeClientsPage } from './getion-de-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GetionDeClientsPageRoutingModule
  ],
  declarations: [GetionDeClientsPage]
})
export class GetionDeClientsPageModule {}
