import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FleursPageRoutingModule } from './fleurs-routing.module';

import { FleursPage } from './fleurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FleursPageRoutingModule
  ],
  declarations: [FleursPage]
})
export class FleursPageModule {}
