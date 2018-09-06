import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sadmin',
  templateUrl: './sadmin.component.html',
  styleUrls: ['./sadmin.component.css']
})
export class SadminComponent implements OnInit {
  username: string;

  public newuser: string = "";
  public newadmin: string = "";
  public newsadmin: string = "";
  public emailu: string = "";
  public emaila: string = "";
  public emails: string = "";


  constructor(private router:Router) {
   }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    console.log(localStorage.getItem("username"));

  }

  addUser(event){
    event.preventDefault();
    var newObj1 = {"generaluser":{"username":this.newuser, "email":this.emailu}}

    console.log(newObj1);
  }

  addAdmin(event){
    event.preventDefault();
    var newObj2 = {"admin":{"username":this.admin, "email":this.emaila}}

    console.log(newObj2);
  }

  addSadmin(event){
    event.preventDefault();
    var newObj3 = {"superadmin":{"username":this.sadmin, "email":this.emails}}

    console.log(newObj3);
  }


  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
