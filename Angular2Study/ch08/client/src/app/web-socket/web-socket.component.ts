import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../shared/web-socket.service';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor(private wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.CreateObservableSocket('ws://localhost:8085')
    .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log("流已經結束")
    );
  }
  sendMessageToServer() {
    this.wsService.sendMessage('Hello from client');
  }

}
