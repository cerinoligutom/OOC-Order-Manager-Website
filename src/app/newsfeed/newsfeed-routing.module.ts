import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsfeedComponent } from './index';

const routes: Routes = [
  { path: 'newsfeed', component: NewsfeedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsfeedRoutingModule { }
