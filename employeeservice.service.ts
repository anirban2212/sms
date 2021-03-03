import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { IEmployee } from './IEmployee';
import { retry,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private resturl : string ='/assets/mydata/employee.json';


  constructor(private http:HttpClient) { }
  getEmployeeFromService() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.resturl).pipe(retry(1),catchError(this.handelError));

  }
  handelError(err :any){
    let errorMessage="";
    if(err.error instanceof ErrorEvent){
      errorMessage=err.error.message;

    }
    else{
      errorMessage = `Error code: ${err.status} \n ErrorMessage:${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
