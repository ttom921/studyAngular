import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { LogMessage } from '../models/log-messsage.model';

@Component({
  selector: 'xterm',
  templateUrl: './xterm.component.html',
  styleUrls: ['./xterm.component.scss']
})
export class XtermComponent implements OnInit, AfterViewInit, OnDestroy {
  private _xterm: Terminal = null!;
  private _fitAddon = new FitAddon();
  private _webLinksAddon = new WebLinksAddon();
  @ViewChild("xterm") xterm: ElementRef = null!;
  // 顏色參考 https://gist.github.com/JBlond/2fea43a3049b38287e5e9cefc87b2124
  ANSI_COLOR: any = {
    "green": '\x1b[32m',
    "red": '\x1b[31m',
    "yellow": '\x1b[33m',
    "blue": '\x1b[36m',
    "white": '\x1b[97m',
  };
  constructor() { }

  ngOnInit(): void {
    // this.term = new Terminal();
    // this.container = document.getElementById('terminal');
    // this.term.open(this.container as HTMLElement);
    // this.term.writeln('Welcome to xterm.js');
  }
  ngOnDestroy() {
    this._xterm.dispose()
    this._fitAddon.dispose()
    this._webLinksAddon.dispose()
  }
  ngAfterViewInit() {
    const xterm = new Terminal({
      // 光標閃爍
      cursorBlink: true,
      screenReaderMode: true,
    })
    this._xterm = xterm;
    xterm.loadAddon(this._fitAddon);
    xterm.loadAddon(this._webLinksAddon);
    xterm.open(this.xterm.nativeElement);
    this._fitAddon.fit();
    this._xterm.writeln('Welcome to xterm.js');
    this._xterm.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    this._xterm.writeln('');
    window.onresize = (evt) => {
      this._fitAddon.fit()
    }
  }
  normalizeLogMessage(msg: LogMessage) {
    let msgpack = {
      ...msg,
      type: (msg.type ? msg.type : 'LOG'),
      timestamp: (msg.timestamp ? msg.timestamp : new Date().toLocaleString())
    };
    //console.log(msgpack);
    let msgclor = "white";
    let logmsg = `${msgpack.timestamp} ${msgpack.message}`;
    switch (msgpack.type) {
      case 'SUCCESS':
        msgclor = "green";
        break;
      case 'ERR'://
        msgclor = "red";
        break;
      case 'WARN'://
        msgclor = "yellow";
        break;
      case 'INFO'://
        msgclor = "blue";
        break;
      default:
        msgclor = "white";
        break;
    }
    this._writeln(msgclor, logmsg);
    //this._writeln("green", "aaaaa");

    // return {
    //   ...msg,
    //   type: (msg.type ? msg.type : 'LOG'),
    //   timestamp: (msg.timestamp ? msg.timestamp : new Date().toLocaleString())
    // }
  }
  private _writeln(color: string, message: any) {

    //let showcolor = `${this.ANSI_COLOR[color]}`;
    //this._xterm.writeln(`${showcolor}${message}`);

    this._xterm.writeln(`${this.ANSI_COLOR[color]} ${message}`);
  }
  AddMessage(msg: string) {

    this._xterm.writeln(msg);
  }

}
