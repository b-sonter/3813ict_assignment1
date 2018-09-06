import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = "";

  constructor(private router:Router, private form: FormsModule) {
   }

  ngOnInit() {
  }

  logingUser(event){
    event.preventDefault();
    if (this.username == "superadmin1"){
      this.router.navigateByUrl("/superadmindash");
       if (typeof(Storage) !== 'undefined'){
        localStorage.setItem('username', this.username);
      }
      }
    else if (this.username == "admin1"){
        this.router.navigateByUrl("/admindash");
         if (typeof(Storage) !== 'undefined'){
          localStorage.setItem('username', this.username);
        }
      }
    else if (this.username == "generaluser1"){
          this.router.navigateByUrl("/dashboard");
          if (typeof(Storage) !== 'undefined'){
            //code for localStorage/sessionStorage.
            console.log("storage ready");
            //store
            localStorage.setItem('username', this.username);
          }
          }
      else{
            alert("Username is not valid");
          }

         }

        }
