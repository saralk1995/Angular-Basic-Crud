import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from './../common.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert:boolean = false;
  addRestaurant = new FormGroup({
    name:new FormControl(''),
    Address:new FormControl(''),
    emailId:new FormControl('')
  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  createResto()
  {
    // console.log(this.addRestaurant.value);
    this.resto.addResto(this.addRestaurant.value).subscribe((result) =>
    {
      this.alert = true;
      this.addRestaurant.reset({});
      console.log("get data from service",result);
    })
  }
  closeAlert()
  {
    this.alert = false;
  }
}
