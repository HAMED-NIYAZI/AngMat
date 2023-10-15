import { Component, OnInit } from '@angular/core';
 import { Customer } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/services/customer.service';
// import { CdkTableModule} from '@angular/cdk/table';
//        import {DataSource} from '@angular/cdk/table';
//        import {MatTableModule} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'] 
})
export class TableComponent implements OnInit {
customerlist!:Customer[];
dataSource:any;
columnsToDisplay:string[]=['code','name','phone','email','status','action'];

  constructor (private service:CustomerService){
   }
  ngOnInit(): void {

   this.GetCustomers();
  }


  GetCustomers(){

 

    this.service.GetCustomers().subscribe(res=>
      {
        this.customerlist=<Customer[]>res;
        console.log( 'res===============');
        console.log( res);  
        console.log( 'customerlist===============');
        console.log( this.customerlist);
 
       // this.dataSource=new MatTableDataSource<Customer>(this.customerlist);
       this.dataSource=this.customerlist;
        console.log( 'dataSource===============');
        
        console.log( this.dataSource);
      });
  }
}
