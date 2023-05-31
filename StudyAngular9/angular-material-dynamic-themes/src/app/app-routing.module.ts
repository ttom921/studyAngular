import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemePreviewComponent } from './theme-preview/theme-preview.component';

const routes: Routes = [
  { path: 'preview', pathMatch: 'full', component: ThemePreviewComponent },
  { path: '', component: ThemePreviewComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
