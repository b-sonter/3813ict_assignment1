import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket/socket.service';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  username: string;
  messages = [];
  message;
  connection;

  constructor(private sockServ: SocketService, private router:Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    console.log("Session started for: "+this.username);

    this.connection = this.sockServ.getMessages().subscribe(message =>{
      this.messages.push(message);
      this.message = '';
    });
  }

  sendMessage(){
    this.sockServ.sendMessage(this.username+': '+this.message);
  }


}
