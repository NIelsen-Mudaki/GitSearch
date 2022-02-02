import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  constructor(private http: HttpClient) { }

  user!: User;

  ngOnInit(): void {
    
  }

  

}
