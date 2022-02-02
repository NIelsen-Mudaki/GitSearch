import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user'
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  alertService!: AlertService;
  user!: User;
  

  constructor(alertService:AlertService, private http:HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse{
      name:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/user").subscribe((data: { name: string; })=>{
        // Succesful API request
        this.user = new User(data.name)
      }), (err: any)=>{
        this.user = new User("Never never give up!")
        console.log("An error occurred")
    }
  }

}
