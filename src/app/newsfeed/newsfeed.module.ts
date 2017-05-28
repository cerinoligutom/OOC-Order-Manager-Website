import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  imports: [
    SharedModule,
    NewsfeedRoutingModule
  ],
  declarations: [NewsfeedComponent]
})
export class NewsfeedModule { }
