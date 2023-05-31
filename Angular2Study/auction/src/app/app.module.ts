import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { patch } from 'webdriver-js-extender';
import { RouterModule } from '@angular/router';
import { ProductService } from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';
import { WebSocketService } from './shared/web-socket.service';
const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( routeConfig),

  ],
  providers: [ProductService,WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
