import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, combineLatest, merge, forkJoin } from 'rxjs';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { combineAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SyncMgrService {
  syncvideolst = [];
  //播放狀態
  playstate$ = new BehaviorSubject(false);
  playAction = false;
  //加載完成
  videoLoaded$ = new BehaviorSubject(false);
  private loadstart$ = new BehaviorSubject(false);
  private loadedmetadata$ = new BehaviorSubject(false);
  //可播放
  canPlay$ = new BehaviorSubject(false);
  //等待中
  waiting$ = new BehaviorSubject(false);
  //時間差
  difftime$ = new BehaviorSubject(false);
  //全螢幕
  fullScreen$ = new BehaviorSubject(false);
  //主控頻道
  mainvideo: MatVideoComponent;
  constructor() { }
  //#region rxjs相關
  //初始化rxjs的事件
  initRxJSevent() {
    this.init_loadedmetadata_combineLatest();
    this.init_loadstart_combineLatest();
    this.init_canplay_combineLatest();
    this.init_waiting_merge();
  }
  //是否可播放
  private init_canplay_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      //obsary.push(item.canplay());
      //let myvideo = item.getVideoTag();
      const event$ = fromEvent(item.getVideoTag(), 'canplay');
      //console.log(item);
      obsary.push(event$);
    });
    //console.log(obsary);
    //全部收到再發射
    //console.log(`init_canplay_combineLatest syncvideolst=${this.syncvideolst.length}`);
    combineLatest(...obsary).subscribe(data => {
      //console.log(`combineLatest->data=${data}`)
      this.canPlay$.next(true);
    });
  }
  //是否在緩衝
  private init_waiting_merge() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      //obsary.push(item.waiting());
      const event$ = fromEvent(item.getVideoTag(), 'waiting');
      obsary.push(event$);
    });
    //合成一個，有任一就發射
    merge(...obsary).subscribe(data => {
      //console.dir(data);
      this.waiting$.next(true);

      //計算時間差
      this.cal_difftime_behavior_subject();
    });
  }
  //時間差
  private cal_difftime_behavior_subject() {

    let ret = this.syncvideolst.some(item => {
      //console.log(`cal_difftime -> mainvideo.time=${this.mainvideo.time} item.time=${item.time}`);
      let calret = Math.abs(this.mainvideo.time - item.time);
      //console.log(`cal_difftime calret=${calret}`);
      if (calret > 0.5)
        return true;
    });
    //console.log(`difftime$=${ret}`);
    this.difftime$.next(ret);
  }
  //讀取完成
  init_loadstart_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'loadstart');
      obsary.push(event$);
    });
    combineLatest(...obsary).subscribe(data => {
      //console.log(`allEvents loadstart`);
      this.loadstart$.next(true);
      this.videoLoaded$.next(true);
    });
  }
  private init_loadedmetadata_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'loadedmetadata');
      obsary.push(event$);
    });
    combineLatest(...obsary).subscribe(data => {
      //console.log(`allEvents loadedmetadata`);
      this.loadedmetadata$.next(true);
      this.videoLoaded$.next(true);
    });
  }
  //#endregion rxjs相關

  //#region 播放控制相關
  setVideoPlayback(value: boolean) {
    if (this.playAction !== value) {
      this.toggleVideoPlayback();
    }
  }
  toggleVideoPlayback(): void {
    this.playAction = !this.playAction;
    this.updateVideoPlayback();
  }
  updateVideoPlayback(): void {
    this.playAction ? this.play() : this.pause();
  }
  private play() {
    console.log(`SyncMgrService->play()`);
    this.syncvideolst.forEach(element => {
      element.getVideoTag().play();
    });
    this.playstate$.next(true);
  }
  pause() {
    console.log(`SyncMgrService->pause()`);
    this.syncvideolst.forEach(element => {
      element.getVideoTag().pause();
    });
    this.playstate$.next(false);
  }
  //#endregion 播放控制相關
  //設定播放時間
  setCurrentTime(setcurtime: number) {
    this.syncvideolst.forEach(element => {
      //console.log(`setCurrentTime be current=${element.time} ${setcurtime}`);
      element.time = setcurtime;
      //console.log(`setCurrentTime af current=${element.time}`);
    });
  }
  //設定移動n秒
  setJumpTime(jumptime: number) {
    this.syncvideolst.forEach(element => {
      //console.log(`setJumpTime be current=${element.time} ${setcurtime}`);
      element.time += jumptime;
      //console.log(`setJumpTime af current=${element.time}`);
    });
  }
  //控制張數
  setFrames(nbFrames: number, fps: number) {
    this.syncvideolst.forEach(element => {
      const currentFrames = element.getVideoTag().currentTime * fps;
      const newPos = (currentFrames + nbFrames) / fps + 0.00001;
      //console.log(`setFrames newPos=${newPos}`);
      element.getVideoTag().currentTime = newPos;
    });
  }
}
