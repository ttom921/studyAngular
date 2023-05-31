import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  AfterViewInit,
  Renderer2
}

  from '@angular/core';

import {
  Observable,
  fromEvent,
  BehaviorSubject,
  combineLatest
}

  from 'rxjs';

import {
  MatVideoComponent
}

  from '../video/video.component';

import {
  SyncVideoMgrService
}

  from './service/sync-video-mgr.service';

import {
  MatPlayButtonComponent
}

  from './ui/mat-play-button/mat-play-button.component';

import {
  isNullOrUndefined
}

  from 'util';

import {
  ThemePalette
}

  from '@angular/material/core';

import {
  delay
}

  from 'rxjs/operators';

import {
  EventManager
}

  from '@angular/platform-browser';
/**
 * 主要控制的元件，主要功能
 * 1.同步8個螢幕的播放
 *   有緩衝，會計算是否同步
 * 2.有前進和後退單frame的功能
 *   是以15張（15fps）或30張(30fpx)
 * 3.有前進和後退10秒（預設）的功能
 * 4. 全螢幕：
 *    會以主要選擇的元件，來做全螢幕，在全螢幕返之後，會暫停所有的video元件和同步時間
 *
 *
 * @export
 * @class SyncVideoComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'sync-video',
  templateUrl: './sync-video.component.html',
  styleUrls: ['./sync-video.component.scss']
})

export class SyncVideoComponent implements OnInit,
  AfterViewInit {
  @ViewChild("matplaybutton", {
    static: true
  }

  ) private matplaybutton: MatPlayButtonComponent;
  @Input() color: ThemePalette = "primary";
  @Input() fps = 29.97;
  @Input() showFrameByFrame = false;
  @Input() oneFrame = 2; // 30/15
  //第一次播放控制
  canactioned = false;
  playBtnIsClick = false;
  //
  //是否顯示全營幕icon
  @Input() fullscreen = true;
  //是否顯示拍照icon
  @Input() photoscreen = true;
  //@Input()
  mainvideo: MatVideoComponent = null;

  constructor(
    private syncVideoMgrService: SyncVideoMgrService,
  ) { }

  ngOnInit(): void {
    this.playBtnIsClick = false;
    this.mainvideo = this.syncVideoMgrService.mainvideo;

  }

  ngAfterViewInit(): void {

    //console.log(this.matplaybutton);
    //console.log(this.mainvideo);
    //console.dir(this.mainvideo);

    //是否可播放
    this.syncVideoMgrService.canPlay$.pipe(delay(15000)).subscribe(data => {

      //console.log(`SVC=>canPlay$=${data}`);
      //console.log(`SVC=>playcliceonce=${this.playcliceonce}`)
      if (this.playBtnIsClick == true) {
        //console.log(`SVC=>play`);
        this.matplaybutton.setVideoPlayback(true);
      }

      this.canactioned = true;
    }

    );

    //是否在緩衝
    this.syncVideoMgrService.waiting$.subscribe(data => {
      //console.log(`SVC=>waiting$=${data}`);
      //console.log(`SVC=>pause`);
      this.matplaybutton.setVideoPlayback(false);
      this.canactioned = false;
    });

    //是否載入完成
    this.syncVideoMgrService.videoLoaded$.subscribe(data => {
      //console.log(`SVC=>videoLoaded$=${data}`);
      this.canactioned = data;
    });

    //是否時間差
    this.syncVideoMgrService.difftime$.subscribe(data => {
      //console.log(`SVC=>difftime=${data}`);
      let mtime = this.mainvideo.time;

      //console.log(`SVC=>difftime mainvideo time=${mtime}`);
      if (data == true) {
        //console.log(`SVC=>difftime=${data}`);
        //console.log(`SVC=>difftime mainvideo time=${mtime}`);
        this.syncVideoMgrService.setCurrentTime(mtime);
      }
    });
    //是否全螢幕
    this.syncVideoMgrService.fullScreen$.subscribe(data => {
      console.log(`fullScreen$=>${data}`);
      if (data == false) {
        //同步和暫停
        this.syncVideoMgrService.difftime$.next(true);
        this.syncVideoMgrService.pause();
      }
    });
  }

  addVideo(video: MatVideoComponent) {
    this.syncVideoMgrService.addVideo(video);
  }



  onClickPlay(ev) {

    //console.log(ev);
    if (this.playBtnIsClick == false) {
      this.playBtnIsClick = true;
    }

    //console.log(`SVC->onClickPlay=>playcliceonce=${this.playcliceonce}`);
  }

  //截取canvas的圖片
  private captureImage(video: HTMLVideoElement) {
    console.log(`video.videoWidth=$ {
        video.videoWidth
      }

      , video.videoHeight=$ {
        video.videoHeight
      }

      `);
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    //canvas.toDataURL('image/jpg');
    canvas.toBlob(function (blob) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.setAttribute("download", "capture.jpeg");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

      , 'image/jpeg', 0.95); // JPEG at 95% quality
  }

  //----以下是測試程式
  onTestclick() {
    //this.captureImage(this.mainvideo.getVideoTag());
  }

  onTestCurrentTime() {
    //let time = this.mainvideo.time;
    this.mainvideo.time += 5;
    //this.syncVideoMgrService.setCurrentTime(time + 5);
  }

  onTest2CurrentTime() {
    let myvideo = this.syncVideoMgrService.syncvideolst[2];
    //let time = myvideo;
    myvideo.time += 5;
  }

  onTestRandTime() {
    //let time = this.mainvideo.time;
    this.syncVideoMgrService.TestRanderTime();
  }

}
