import { Component, OnInit } from '@angular/core';

import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees=[] as any;
  public errorMsg:any;
  constructor(private eService:EmployeeserviceService) { }

  ngOnInit(){
    this.eService.getEmployeeFromService().subscribe(data => this.employees=data,error=>this.errorMsg=error);
  }

}
