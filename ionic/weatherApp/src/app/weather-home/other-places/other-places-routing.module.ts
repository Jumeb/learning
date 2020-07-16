import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherPlacesPage } from './other-places.page';

const routes: Routes = [
  {
    path: '',
    component: OtherPlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherPlacesPageRoutingModule {}
