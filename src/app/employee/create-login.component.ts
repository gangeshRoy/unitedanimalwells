import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from "@angular/forms";
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {
  employeeLoginForm:FormGroup;
  products:any = [];
  constructor(private fb:FormBuilder,public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.employeeLoginForm=this.fb.group({
      fullNameOrEmail:[''],
      password:['']
    
    })
  }
  
 

  
  onLoadDataClick():void{
    this.employeeLoginForm.patchValue({
      fullNameOrEmail:this.employeeLoginForm.value.fullNameOrEmail,
      password:this.employeeLoginForm.value.password
      
    })
 if((this.employeeLoginForm.value.fullNameOrEmail=="Gangesh kumar" ||this.employeeLoginForm.value.fullNameOrEmail=="gangesh@ual.com") && this.employeeLoginForm.value.password=="123456"){
  window.location.href="http://localhost:4200/list";
 }
    // window.location.href="http://localhost:4200/list";
      }

  onSubmit():void{
    console.log(this.employeeLoginForm.value);
    // console.log(this.employeeFrom.getRawValue);
    // console.log(this.employeeFrom.controls.fullName.touched);
    // console.log(this.employeeFrom.get("fullName").value);
  }
}




