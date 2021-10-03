import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsCommandePageRoutingModule } from './details-commande-routing.module';

import { DetailsCommandePage } from './details-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DetailsCommandePageRoutingModule
  ],
  declarations: [DetailsCommandePage]
})
export class DetailsCommandePageModule {}
