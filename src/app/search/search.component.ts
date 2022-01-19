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
    interface ApiResponse{
      name:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/user").subscribe((data)=>{
        // Succesful API request
        this.user = new User(data.name)
      })
  }

  

}
