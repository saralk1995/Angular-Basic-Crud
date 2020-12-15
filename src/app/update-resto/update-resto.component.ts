import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert:boolean = false;
  editRestaurant = new FormGroup({
    name:new FormControl(''),
    Address:new FormControl(''),
    emailId:new FormControl('')
  })

  constructor(private resto:CommonService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>
    {
      this.editRestaurant = new FormGroup({
        name:new FormControl(result['name']),
        Address:new FormControl(result['Address']),
        emailId:new FormControl(result['emailId'])
      })
    })
  }
  updateResto()
  {
    this.resto.updateResto(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((result) =>
    {
      this.alert = true;
      this.editRestaurant.reset({});
      console.log("data update succesfull",result);
    })
  }
  closeAlert()
  {
    this.alert = false;
  }

}
