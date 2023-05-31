import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPlayManagerComponent } from './video-play-manager.component';


const routes: Routes = [
  { path: '', component: VideoPlayManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPlayManagerRoutingModule { }
