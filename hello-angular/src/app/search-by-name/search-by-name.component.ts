import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  userNametobeSearched: string = "";
  response: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  searchUser() {
    this.http.get('http://localhost:9898/employee/name/' + this.userNametobeSearched)
      .subscribe((response) => {
        this.response = response;
      });
  }

}

