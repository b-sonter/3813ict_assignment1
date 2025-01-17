import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
