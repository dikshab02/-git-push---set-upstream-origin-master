import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { CrudHttpService } from './crud-http.service';
import { UserLoggedInService } from './user-logged-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  navLinks: any[];

  constructor(
    private router: Router,
    public crudHttpService: CrudHttpService,
    public userLoggedInService: UserLoggedInService
  ) {
    this.navLinks = [
      {
        label: 'Home',
        link: '/',
        index: 0,
      },
      {
        label: 'Product',
        link: '/product',
        index: 1,
      },
      {
        label: 'MyOrders',
        link: '/myOrders',
        index: 2,
      },
      {
        label: 'Orders',
        link: '/orders',
        index: 3,
      },
    ];
  }
  ngOnInit(): void {
    //console.log('app ngOninit')
    if (this.crudHttpService.isLoggedin()) {
      this.crudHttpService.storeUserData = this.crudHttpService.getUser();
      console.log(this.crudHttpService.storeUserData?.firstname)

    }
  }

  logout() {
    this.crudHttpService.logout();
    this.router.navigate(['/login']);
    this.crudHttpService.storeUserData = undefined;
  }
}
