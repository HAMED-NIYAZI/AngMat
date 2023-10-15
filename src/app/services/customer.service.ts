import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }


  GetCustomer():Observable<Customer[]>//return type is kind of 
  //observable and its like query
  {
   return this.http.get<Customer[]>("http://localhost:5000/customer"); 
  }

}
