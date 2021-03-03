import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { StrdirectiveComponent } from './strdirective/strdirective.component';
import { ChildComponent } from './child/child.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeserviceService } from './employeeservice.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    StrdirectiveComponent,
    ChildComponent,
    MypipeComponent,
    EmployeelistComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
