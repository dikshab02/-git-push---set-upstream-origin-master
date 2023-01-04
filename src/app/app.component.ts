import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
        isActive: false,
      },
      {
        label: 'Product',
        link: '/product',
        index: 1,
        isActive: false,
      },
      {
        label: 'MyOrders',
        link: '/myOrders',
        index: 2,
        isActive: false,
      },
      {
        label: 'Orders',
        link: '/orders',
        index: 3,
        isActive: false,
      },
    ];
  }
  ngOnInit(): void {
    //console.log('app ngOninit')
    if (this.crudHttpService.isLoggedin()) {
      this.crudHttpService.storeUserData = this.crudHttpService.getUser();
      console.log(this.crudHttpService.storeUserData?.firstname);
    }
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) this.activateRouteNavLink(val.url);
    });
  }

  //to activate the tab matching with route
  activateRouteNavLink(path: string) {
    this.navLinks.forEach((n) => (n.isActive = n.link === path ? true : false));
  }

  logout() {
    this.crudHttpService.logout();
    this.router.navigate(['/login']);
    this.crudHttpService.storeUserData = undefined;
  }
}
