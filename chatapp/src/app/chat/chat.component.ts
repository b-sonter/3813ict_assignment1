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
  public username: string;
  //messages = [];
  message: string;
  connection;

  constructor(private sockServ: SocketService, private router:Router) { }

  ngOnInit() {
    /* if(!localStorage.getItem('username')){
      //no valid session is available
      console.log('Not Validated');
      localStorage.clear();
      alert("Not a Valid User");
      this.router.navigateByUrl('login');
    } else{ */
      this.username = localStorage.getItem('username');
      console.log("Session started for: "+this.username);

    /*  this.sockServ
        .getMessages()
        .subscribe((message:string) =>{
          this.messages.push(message);
        }) */
    //}
  }

  sendMessage(){
    this.sockServ.sendMessage(this.username+': '+this.message);
    this.message = '';
  }

/*
this.connection = this.sockServ.getMessages().subscribe(message =>{
  this.messages.push(message);
  this.message = '';
});
 */

}
