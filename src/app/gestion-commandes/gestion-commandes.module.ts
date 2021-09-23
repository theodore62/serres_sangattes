import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCommandesPageRoutingModule } from './gestion-commandes-routing.module';

import { GestionCommandesPage } from './gestion-commandes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GestionCommandesPageRoutingModule
  ],
  declarations: [GestionCommandesPage]
})
export class GestionCommandesPageModule {}
