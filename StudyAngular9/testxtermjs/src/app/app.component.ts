import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { XtermComponent } from './xterm/xterm.component';
import { LogMessage as NgxLogMessage } from './models/log-messsage.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild("term") term: XtermComponent = null!;
  title = 'testxtermjs';
  logs: NgxLogMessage[] = [
    { message: 'A simple log message' },
    { message: 'A success message', type: 'SUCCESS' },
    { message: 'A warning message', type: 'WARN' },
    { message: 'An error message', type: 'ERR' },
    { message: 'An info message', type: 'INFO' },
    { message: 'An log message', type: 'LOG' },
  ];
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

    this.term.AddMessage("test message ngAfterViewInit");
    setInterval(() => {
      let idx = Math.floor(Math.random() * this.logs.length);
      this.term.normalizeLogMessage(this.logs[idx]);
      //this.term.AddMessage(this.logs[idx].message);
    }, 1000);

  }
}
