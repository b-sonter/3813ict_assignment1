import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = "http://localhost:3000";
  private socket;


  constructor() { }


  sendMessage(message){
    console.log('sendMessage('+message+ ')');
  }


}
