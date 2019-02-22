import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  constructor(private fb:FormBuilder) { }



  ngOnInit() {
    this.employeeForm=this.fb.group({
      fullName:[''],
      email:[''],
      skills:this.fb.group({
        skillName:[''],
        exprienceInYears:[''],
        proficiency:[''],
      })
    })
  }
  // ngOnInit() {
  //   this.employeeForm=new FormGroup({
  //     fullName:new FormControl(),
  //     email:new FormControl(),
  //     skills:new FormGroup({
  //       skillName:new FormControl(),
  //       exprienceInYears:new FormControl(),
  //       proficiency:new FormControl()
  //     })
  //   })
  // }
  onLoadDataClick():void{
this.employeeForm.setValue({
  fullName:"Gangesh kumar",
  email:"Gangesh.k@tcg-digital.com",
  skills:{
    skillName:"angular6",
    exprienceInYears:"5yrs",
    proficiency:"beginer"

  }
})
  }

  /** for update some specifiy input **/

  // onLoadDataClick():void{
  //   this.employeeForm.patchValue({
  //     fullName:"Gangesh kumar",
  //     email:"Gangesh.k@tcg-digital.com",
  //     skills:{
  //       skillName:"angular6",
  //       exprienceInYears:"5yrs",
  //       proficiency:"beginer"
    
  //     }
  //   })
  //     }
onSubmit():void{
  console.log(this.employeeForm.value);
  // console.log(this.employeeFrom.getRawValue);
  // console.log(this.employeeFrom.controls.fullName.touched);
  // console.log(this.employeeFrom.get("fullName").value);
}
}

