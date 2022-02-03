import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { User } from '../user'
import {ProfileService} from '../profile-service/profile.service';
import { GithubService } from '../github-service/github.service';
import { AlertService } from '../alert-service/alert.service';
import { repos } from "../repos";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ GithubService, ProfileService]
})
export class SearchComponent implements OnInit {
  loading!: boolean;
  profileRequest: any;
  userName = '';
  users!: User[];
  repos!: repos[];
  
  
  constructor(private githubService: GithubService, private alertService: AlertService, private profileService: ProfileService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public getUsers(event: any) {
    this.loading = true;
    // tslint:disable-next-line:prefer-const
    let promise = new Promise<void>((resolve) => {
      this.profileService.getUsers(this.userName).toPromise().then((response: any) => {
        this.users = response; 
        this.loading = false; 
        resolve();
      },
        (error: any) => {
        this.alertService ;
        this.loading = false;
      }
    );
    });
    return promise;

  }

  public getRepos(event: any) {
    this.loading = true;
    // tslint:disable-next-line:prefer-const
    let promise = new Promise<void>((resolve , reject) => {
      this.githubService.getRepos (this.userName).toPromise().then((response: any) => {
       this.repos = response; this.loading = false; // this will push all data to array [repo]
        resolve();
      },
      (      error: any) => {
        this.alertService;
        this.loading = false;
      }
    );
    });
    return promise;
  }

}
