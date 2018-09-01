import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router:Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.password = localStorage.getItem("password");

    console.log(localStorage.getItem("username"));
    console.log(localStorage.getItem("password"));
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }



}
