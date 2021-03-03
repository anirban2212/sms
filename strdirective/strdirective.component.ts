import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strdirective',
  template: `
  <div *ngFor="let c of colors">
  <h2 [style.color]="c">{{c}}</h2>
  
  </div>
  `,
  styleUrls: ['./strdirective.component.css']
})
export class StrdirectiveComponent implements OnInit {
 public colors=["orange","red","blue","green"];

  constructor() { }

  ngOnInit(): void {
  }

}
