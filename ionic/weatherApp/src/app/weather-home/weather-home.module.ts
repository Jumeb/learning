import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherHomePageRoutingModule } from './weather-home-routing.module';

import { WeatherHomePage } from './weather-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherHomePageRoutingModule
  ],
  declarations: [WeatherHomePage]
})
export class WeatherHomePageModule {}
