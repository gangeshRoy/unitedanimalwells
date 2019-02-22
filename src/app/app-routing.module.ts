import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {commonModule} from "@angular/core";
import {ListEmployeesComponent} from "./employee/list-employees.component";
import {CreateEmployeeComponent} from "./employee/create-employee.component";
import {CreateLoginComponent} from "./employee/create-login.component";

const appRoutes: Routes = [
{path:"list",component:ListEmployeesComponent},
{path:"create",component:CreateEmployeeComponent},
{path:"adminLogin",component:CreateLoginComponent},
{path:"",redirectTo:"/adminLogin",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
