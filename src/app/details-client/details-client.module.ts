import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsClientPageRoutingModule } from './details-client-routing.module';

import { DetailsClientPage } from './details-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DetailsClientPageRoutingModule
  ],
  declarations: [DetailsClientPage]
})
export class DetailsClientPageModule {}
