import { Injectable } from '@angular/core';
import { Subject, map, Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

const EVENTS_URL = "ws://machinestream.herokuapp.com/api/v1/events/websocket?vsn=2.0.0";

export interface Message {
    source: string;
    content: string;
}

@Injectable()
export class WebsocketService {
    private webSocket!: WebSocketSubject<string>;

    constructor() {}

    connect(data: string) {
      this.webSocket = webSocket(EVENTS_URL);
      this.pushData(data);
    }

    close() {
      this.webSocket.unsubscribe();
    }

    pushData(data: string) {
      this.webSocket.next(data);
    }

    observer(): Observable<string> {
      return this.webSocket.asObservable();
    }
}