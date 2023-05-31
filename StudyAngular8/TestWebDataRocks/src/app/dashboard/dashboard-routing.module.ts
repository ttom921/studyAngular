import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TestShowPageComponent } from './page/test-show-page/test-show-page.component';
import { TestWebdatarockspivotComponent } from './page/test-webdatarockspivot/test-webdatarockspivot.component';
import { TestGoogleChartComponent } from './page/test-google-chart/test-google-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'testshowpage', pathMatch: 'full' },
      { path: 'testshowpage', component: TestShowPageComponent, },
      { path: 'testwebdatarockspivot', component: TestWebdatarockspivotComponent, },
      { path: 'testgooglechart', component: TestGoogleChartComponent },
    ]
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
