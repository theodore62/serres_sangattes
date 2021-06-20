import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterFleurPageRoutingModule } from './ajouter-fleur-routing.module';

import { AjouterFleurPage } from './ajouter-fleur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AjouterFleurPageRoutingModule
  ],
  declarations: [AjouterFleurPage]
})
export class AjouterFleurPageModule {}
