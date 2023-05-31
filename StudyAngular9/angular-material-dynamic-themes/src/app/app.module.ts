import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedAngularMaterialModule } from './share/shared-angular-material/shared-angular-material.module';
import { SimpleDialogComponent } from './_dialog/simple-dialog/simple-dialog.component';
import { ThemePreviewComponent } from './theme-preview/theme-preview.component';
import { PreviewContainersComponent } from './theme-preview/preview-containers/preview-containers.component';
import { PreviewControlsComponent } from './theme-preview/preview-controls/preview-controls.component';
import { PreviewTypographyComponent } from './theme-preview/preview-typography/preview-typography.component';
import { IconNotifyComponent } from './icon-picker/icon-notify/icon-notify.component';
import { PreviewGeneralComponent } from './theme-preview/preview-general/preview-general.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDialogComponent,
    ThemePreviewComponent,
    PreviewControlsComponent,
    PreviewTypographyComponent,
    PreviewContainersComponent,
    PreviewGeneralComponent,
    IconNotifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SimpleDialogComponent],
})
export class AppModule { }
