import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HTMLMarkerComponent } from './_common/map/htmlmarker/htmlmarker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HTMLMarkerComponent,
  ],
  imports: [
    AppRoutingModule,
    LeafletModule.forRoot(),
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
