import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairsDashboardComponent } from './shared/components/fairs-dashboard/fairs-dashboard.component';
import { FairsCardComponent } from './shared/components/fairs-dashboard/fairs-card/fairs-card.component';
import { FairsDeatailsComponent } from './shared/components/fairs-dashboard/fairs-deatails/fairs-deatails.component';

@NgModule({
  declarations: [
    AppComponent,
    FairsDashboardComponent,
    FairsCardComponent,
    FairsDeatailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
