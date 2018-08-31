import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;

  constructor(private router:Router, private form: FormsModule) { }

  ngOnInit() {
  }

  logingUser(event){
    event.preventDefault();
    if (typeof(Storage) !== 'undefined'){
      sessionStorage.setItem('username', this.username);
      this.router.navigate(['/dashboard'])
    }
  }

}
