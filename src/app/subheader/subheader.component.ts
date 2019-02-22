import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {

subHeaderForm:FormGroup;
  constructor(private fb:FormBuilder) { }



  ngOnInit() {
    this.subHeaderForm=this.fb.group({
      type:['']
     
    })
  }

  types= [
    {
        "id": "1",
        "value": "Type 1"
    },
    {
         "id": "2",
         "value": "Type 2"
    },
    {
          "id": "3",
          "value": "Type 3"
    }] 
}
