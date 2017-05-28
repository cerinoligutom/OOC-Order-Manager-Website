import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent, SettingsComponent } from './index';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ':id',
      },
      {
        // TODO:
        // As specified above, no ID redirects you to this path.
        // Make sure if route parameter ID is empty, display
        // current logged in user's profile
        path: ':id',
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
