import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherPlacesPageRoutingModule } from './other-places-routing.module';

import { OtherPlacesPage } from './other-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherPlacesPageRoutingModule
  ],
  declarations: [OtherPlacesPage]
})
export class OtherPlacesPageModule {}
