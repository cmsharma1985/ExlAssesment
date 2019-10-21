import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  response: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  displayAllUserPresent() {
    this.http.get('http://localhost:9898/employee')
      .subscribe((response) => {
        this.response = response;
      });
  }
}
