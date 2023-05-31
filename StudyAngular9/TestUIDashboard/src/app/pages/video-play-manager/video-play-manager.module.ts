import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayManagerRoutingModule } from './video-play-manager-routing.module';
import { VideoPlayManagerComponent } from './video-play-manager.component';
import { SharedAngularMaterialModule } from 'src/app/share/shared-angular-material/shared-angular-material.module';
import { MatVideoModule } from 'src/app/_common/video/video.module';
import { SyncMgrComponent } from './sync-mgr/sync-mgr.component';
import { MatPlayButtonComponent } from './sync-mgr/ui/mat-play-button/mat-play-button.component';
import { MatFrameByFrameControlComponent } from './sync-mgr/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component';
import { MatFullscreenButtonComponent } from './sync-mgr/ui/mat-fullscreen-button/mat-fullscreen-button.component';


@NgModule({
  declarations: [VideoPlayManagerComponent, SyncMgrComponent, MatPlayButtonComponent, MatFrameByFrameControlComponent, MatFullscreenButtonComponent],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    MatVideoModule,
    VideoPlayManagerRoutingModule
  ]
})
export class VideoPlayManagerModule { }
