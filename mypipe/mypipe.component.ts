import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrls: ['./mypipe.component.css']
})
export class MypipeComponent implements OnInit {
  public name="india";
  public msg="india is my country";

  public date=new Date();

  public person={
    "fname":"ratnesh",
    "lname":"nama"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
