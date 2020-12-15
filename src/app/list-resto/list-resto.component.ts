import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  public collection:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result) =>
    {
      this.collection = result;
      console.log(this.collection);
    });
  }

}
