import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { WebSocketComponent } from './web-socket/web-socket.component';
import { WebSocketService } from './shared/web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
