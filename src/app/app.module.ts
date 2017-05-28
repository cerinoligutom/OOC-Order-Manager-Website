import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/index';
import { NotFoundPageComponent } from './not-found-page/index';

// Feature modules
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    NewsfeedModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
