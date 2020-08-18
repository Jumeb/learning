import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentPlacePageRoutingModule } from './current-place-routing.module';

import { CurrentPlacePage } from './current-place.page';
import { AddPlaceComponent } from '../add-place/add-place.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentPlacePageRoutingModule,
  ],
  declarations: [CurrentPlacePage,AddPlaceComponent],
  entryComponents: [AddPlaceComponent]
})
export class CurrentPlacePageModule {}
