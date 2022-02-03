import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  fromURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) { 

  }

  getUsers(userName: string): Observable<User[]> {

    return this.http.get<User[]>(this.fromURL + '/users/' + userName);
  }
    }
