import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign-component',
  templateUrl: './formdesign-component.component.html',
  styleUrls: ['./formdesign-component.component.css']
})
export class FormdesignComponentComponent implements OnInit {
countriesList=[
  {value:'001',viewValue:'USA'},
  {value:'003',viewValue:'UK'},
  {value:'098',viewValue:'Iran'},
  {value:'0011',viewValue:'Canada'},
];


termsList=[
  {value:'7',viewValue:'7days'},
  {value:'14',viewValue:'14days'},
  {value:'30',viewValue:'30days'},
  {value:'60',viewValue:'60days'},
  {value:'90',viewValue:'90days'},
  {value:'180',viewValue:'180days'},
  {value:'365',viewValue:'365days'},
  {value:'lifetime',viewValue:'Life Time'},
];

customerform=this.builder.group({
  name:this.builder.control('',Validators.required),
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  phone:this.builder.control('',Validators.required),
  country:this.builder.control('',Validators.required),
  address:this.builder.control('',Validators.required),
  term:this.builder.control('',Validators.required),

  dob:this.builder.control(new Date(2000,2,20),Validators.required),
  gender:this.builder.control('Female',Validators.minLength(1)),
  status:this.builder.control(true,Validators.minLength(1)),
 
  // name:this.builder.control('',Validators.required),
});


constructor(private builder:FormBuilder){}



  ngOnInit(): void {
   this.customerform.setValue({
    name:'Hamed',
    email:'Hamed.niyazi5@gmail.com',
    phone:'09120171198',
    country:'003',
    address:'asasasasasasasasasasasasasasasasasasasasasasasasasasas',
    term:'365days',
    dob:new Date(2000,2,2),
    gender:'Female',
    status:true,
   
   });

    
  }



SaveCustomer(){
console.log(this.customerform.value);
}



ClearForm(){
 this.customerform.reset();
  }

  
}
