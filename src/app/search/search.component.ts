import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  showResults() {

    this.user[index].showDescription = !this.user[index].showDescription;
  }

  constructor() { }


  ngOnInit(): void {
    
  }

  

}
