import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/observable/dom/webSocket';

@Injectable()
export class WebSocketService {
  ws: WebSocket;
  constructor() { }

  CreateObservableSocket(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      }
    );

  }

  sendMessage(message: string) {
    this.ws.send(message);
  }
}
