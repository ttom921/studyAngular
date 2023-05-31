import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'videoplaymanager/:carid/:eventid/:token',
    loadChildren: () => import('./pages/video-play-manager/video-play-manager.module').then(m => m.VideoPlayManagerModule)
  },
  {
    path: 'videoplaymanager2/:carid/:eventid/:token',
    loadChildren: () => import('./pages/video-play-manager2/video-play-manager2.module').then(m => m.VideoPlayManager2Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
