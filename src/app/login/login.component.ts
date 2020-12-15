import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  loginUser()
  {
    if(this.emailId == "admin@gmail.com" && this.password == "abc")
    {
      this.router.navigate[("../list")];
    }
    else
    {
      alert("Please enter valid details");
    }
  }

}
