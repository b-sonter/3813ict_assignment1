import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  username: string;

  constructor(private router:Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');

    console.log(localStorage.getItem("username"));
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }



}
