import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { Code404Component } from './code404/code404.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,
    Code404Component,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
