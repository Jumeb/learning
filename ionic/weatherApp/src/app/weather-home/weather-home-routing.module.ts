import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherHomePage } from './weather-home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: WeatherHomePage,
    children: [
      {
        path: 'current-place',
        children: [
          {
            path: '',
            loadChildren: () => import('./current-place/current-place.module').then( m => m.CurrentPlacePageModule)
          }
        ]
      },
      {
        path: 'other-places',
        children: [
          {
            path: '',
            loadChildren: () => import('./other-places/other-places.module').then( m => m.OtherPlacesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/weather-home/tabs/cother-places',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/weather-home/tabs/current-place',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherHomePageRoutingModule {}
