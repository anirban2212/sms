import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('parentData')public pd="";
@Output() public childEvent=new EventEmitter();
myEvent(){
  this.childEvent.emit("im coming from child");
}
  constructor() { }

  ngOnInit(): void {
  }

}
