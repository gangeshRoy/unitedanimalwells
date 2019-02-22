import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  title = 'United animalwells transport dashboard';
  allUsers:any = [];
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.showAllUsers();
  }
  showAllUsers() {
    this.allUsers = [];
    // console.log(this.allUsers[city]);
    this.rest.getAllUsers().subscribe((data: {}) => {
      // console.log(data);
      this.allUsers = data;
      console.log(this.allUsers)
      // if(!data){
      //   window.location.href="http://localhost:4200/list";
      // }
    });
  }
}
