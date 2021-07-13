import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterVarieterPageRoutingModule } from './ajouter-varieter-routing.module';

import { AjouterVarieterPage } from './ajouter-varieter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AjouterVarieterPageRoutingModule
  ],
  declarations: [AjouterVarieterPage]
})
export class AjouterVarieterPageModule {}
