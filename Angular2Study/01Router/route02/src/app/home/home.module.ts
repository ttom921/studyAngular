import { CustomMaterialModule } from './../custom-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule,
  ],
  declarations: [
    HomeComponent, HeaderComponent, AsideComponent
  ],
  exports: [CustomMaterialModule]
})
export class HomeModule { }
