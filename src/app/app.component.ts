import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/core/cart.service';
import { CrudHttpService } from '../core/crud-http.service';

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
    public cartService: CartService
  ) {
    this.navLinks = [
      {
        label: 'Home',
        link: '/',
        index: 0,
        isActive: true,
      },
      {
        label: 'Product',
        link: '/product',
        index: 1,
        isActive: true,
      },
      {
        label: 'My Orders',
        link: '/myOrders',
        index: 2,
        isActive: true,
      },
      {
        label: 'All Orders',
        link: '/allOrders',
        index: 3,
        isActive: true,
      },
    ];
  }
  ngOnInit(): void {
    this.crudHttpService.logInUpdated.subscribe((res) => {
      if (this.crudHttpService.isAdmin()) this.navLinks[3].isActive = true;
      else this.navLinks[3].isActive = false;
    });
    if (this.crudHttpService.isLoggedin()) {
      this.crudHttpService.logInUpdated.next(true);
      this.crudHttpService.storeUserData = this.crudHttpService.getUser();
    } else this.crudHttpService.logInUpdated.next(false);
  }

  //to activate the tab matching with route
  activateRouteNavLink(path: string) {
    this.navLinks.forEach((n) => (n.isActive = n.link === path ? true : false));
  }

  logout() {
    this.crudHttpService.logout();
    this.router.navigate(['/login']);
  }

  cartClick() {
    if (this.cartService.lstCartItems.length > 0)
      this.router.navigate(['cart']);
  }
}
