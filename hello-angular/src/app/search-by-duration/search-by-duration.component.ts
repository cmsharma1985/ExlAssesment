import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-by-duration',
  templateUrl: './search-by-duration.component.html',
  styleUrls: ['./search-by-duration.component.css']
})
export class SearchByDurationComponent implements OnInit {
  start_date: string = "";
  end_date: string = "";
  response: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  SearchUserbetweenDate() {
    this.http.get('http://localhost:9898/employee/servePeriod/' + this.start_date + "/" + this.end_date)
      .subscribe((response) => {
        this.response = response;
      });
  }

  

}

