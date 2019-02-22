import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateLoginComponent } from './employee/create-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './app/header/header.component';
import { MainHeaderComponent } from './header/main-header.component';
import { ImgComponent } from './app/img/img.component';
import { ImagesComponent } from './app/images/images.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GraphpiechartComponent } from './graphpiechart/graphpiechart.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    CreateLoginComponent,
    HeaderComponent,
    MainHeaderComponent,
    ImgComponent,
    ImagesComponent,
    SubheaderComponent,
    DropdownComponent,
    GraphpiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }

