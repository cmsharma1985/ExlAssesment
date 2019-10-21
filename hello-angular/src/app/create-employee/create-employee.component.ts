import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  contact: { id: string, firstname: string, lastname: string, title: string, age: any, joiningdate: string } =
    { id: "", firstname: "", lastname: "", title: "", age: "", joiningdate: "" };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createContact() {
    console.log(this.contact);
    this.http.post('http://localhost:9898/employee/add/',this.contact).subscribe(
    (val) => {
      console.log("POST call successful value returned in body", 
                  val);
  },
  response => {
      console.log("POST call in error", response);
  },
  () => {
      console.log("The POST observable is now completed.");
  });
    this.contact = { id: "", firstname: "", lastname: "", title: "", age: "", joiningdate: "" };

  }

}
