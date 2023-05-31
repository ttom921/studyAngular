import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SimpleChartComponent } from './charts/simple-chart/simple-chart.component';
import { SimpleBarComponent } from './charts/simple-bar/simple-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { BasicLineComponent } from './charts/line/basic-line/basic-line.component';
import { BasicAreaComponent } from './charts/line/basic-area/basic-area.component';
import { SmoothedLineComponent } from './charts/line/smoothed-line/smoothed-line.component';
import { StackedLineComponent } from './charts/line/stacked-line/stacked-line.component';
import { BarAniDelayComponent } from './charts/bar/bar-ani-delay/bar-ani-delay.component';
import { MixLineBarComponent } from './charts/bar/mix-line-bar/mix-line-bar.component';
import { SimplePieComponent } from './charts/pie/simple-pie/simple-pie.component';
import { RosePieComponent } from './charts/pie/rose-pie/rose-pie.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleChartComponent,
    SimpleBarComponent,
    BasicLineComponent,
    BasicAreaComponent,
    SmoothedLineComponent,
    StackedLineComponent,
    BarAniDelayComponent,
    MixLineBarComponent,
    SimplePieComponent,
    RosePieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxEchartsModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
