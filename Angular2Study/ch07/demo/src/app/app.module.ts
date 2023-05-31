import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactivFormComponent } from './reactiv-form/reactiv-form.component';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactivFormComponent,
    ReactiveRegistComponent,
    MobileValidatorDirective,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
