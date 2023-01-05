import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudHttpService } from 'src/app/crud-http.service';
import { UserLoggedInService } from 'src/app/user-logged-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string = '';
  constructor(private crudHttpService: CrudHttpService,
              private router: Router,
              public userLoggedInService: UserLoggedInService) {
}


  ngOnInit(): void {
    if(!this.crudHttpService.isLoggedin()){
      this.router.navigate(['/login']);
    }
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log("searchText", this.searchText);
  }

}
