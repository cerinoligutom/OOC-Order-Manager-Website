import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  imports: [
    CommonModule,
    NewsfeedRoutingModule
  ],
  declarations: [NewsfeedComponent]
})
export class NewsfeedModule { }
