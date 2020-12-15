import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean = false;
  createUser = new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
    emailId:new FormControl('')
  })
  constructor(private user:CommonService) { }

  ngOnInit(): void {
  }
  addUser()
  {
    this.user.addUser(this.createUser.value).subscribe((result) =>
    {
      console.log(result,"data created ");
    })
    this.alert = true;
    this.createUser.reset({});
  }
  closeAlert()
  {
    this.alert = false;
  }
  

}
