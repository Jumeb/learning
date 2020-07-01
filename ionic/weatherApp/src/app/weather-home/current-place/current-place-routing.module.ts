import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentPlacePage } from './current-place.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentPlacePageRoutingModule {}
