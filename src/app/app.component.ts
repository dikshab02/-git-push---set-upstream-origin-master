import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/core/cart.service';
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
    public userLoggedInService: UserLoggedInService,
    public cartService: CartService
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
        label: 'My Orders',
        link: '/myOrders',
        index: 2,
        isActive: false,
      },
      {
        label: 'All Orders',
        link: '/orders',
        index: 3,
        isActive: false,
      },
    ];
  }
  ngOnInit(): void {
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

  cartClick() {
  if(this.cartService.lstCartItems.length > 0)
    this.router.navigate(['cart'])
  }
}
