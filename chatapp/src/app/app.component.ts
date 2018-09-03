import { Component } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatapp';

  constructor(socketService: SocketService){
  }



}

(window as any).global = window;
