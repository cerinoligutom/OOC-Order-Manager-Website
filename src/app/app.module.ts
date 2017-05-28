import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/index';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { DashboardModule } from './dashboard/dashboard.module';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
