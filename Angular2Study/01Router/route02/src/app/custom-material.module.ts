import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class CustomMaterialModule { }
