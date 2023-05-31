import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { Code404Component } from './code404/code404.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'home2', component: Home2Component,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]
  },
  { path: '**', component: Code404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
