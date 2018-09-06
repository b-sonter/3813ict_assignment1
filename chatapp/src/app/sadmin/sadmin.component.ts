import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sadmin',
  templateUrl: './sadmin.component.html',
  styleUrls: ['./sadmin.component.css']
})
export class SadminComponent implements OnInit {
  username: string;


  constructor(private router:Router) {
   }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    console.log(localStorage.getItem("username"));

  }

  addUser(event){
    event.preventDefault();
  }


  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
