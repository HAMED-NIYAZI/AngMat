import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerFrom!:FormGroup;

  constructor(){}
ngOnInit(): void {
 this.registerFrom=new FormGroup({
  firstName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  lastName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  phoneNumber:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
 });
  
}



register(): void{
  alert('register()');
console.log('this.registerFrom.value:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::');
  console.log(JSON.stringify(this.registerFrom.value));//to json
  console.log(JSON.parse(JSON.stringify(this.registerFrom.value))); //to object

if(this.registerFrom.value.firstName==null || this.registerFrom.value.firstName=="" ) {alert('لطفا نام را وارد نمایید'); return;}
else if(this.registerFrom.value.lastName==null || this.registerFrom.value.lastName=="" ) {alert('لطفا نام خانوادگی را وارد نمایید'); return;}
else if(this.registerFrom.value.phoneNumber==null || this.registerFrom.value.phoneNumber=="" ) {alert('لطفا شماره تلفن را وارد نمایید'); return;}
}




}
