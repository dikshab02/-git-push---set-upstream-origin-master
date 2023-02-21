import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/model/user.model';
import { IOrder } from 'src/model/order.model';
import { IProduct } from 'src/product/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private userkey: string = 'loggedinuser';
  private cartKey: string = 'productsListedInCart';
  lstCartItems: IProduct[] = [];

  constructor(private http: HttpClient) {
    this.lstCartItems = this.getStorageItems();
  }

  addToCart(product: IProduct) {
    this.lstCartItems.push(product);
    this.saveToStorage();
  }

  getCartItems() {
    return this.lstCartItems;
  }

  clearCartItems() {
    this.lstCartItems = [];
    return this.lstCartItems;
  }

  saveToStorage() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.lstCartItems));
  }

  //get user from local storage
  getStorageItems(): IProduct[] {
    let u = localStorage.getItem(this.cartKey);
    return u ? JSON.parse(u) : [];
  }

  //check user is logged in
  isLoggedin(): boolean {
    return localStorage.getItem(this.cartKey) ? true : false;
  }

  checkoutProducts(gridData: IOrder) {
    let url = environment.apiUrl + 'cart/';
    return this.http.post<IOrder>(url, gridData);
  }

  getOrders(){
    let userid: string = '';
    let temp: string | null = localStorage.getItem(this.userkey);
    if(temp){
      let tempObj = JSON.parse(temp)
       userid = tempObj._id;
    }
    let url = environment.apiUrl + 'cart?userId=' + userid;
    return this.http.get<IOrder[]>(url)
  }

  getLoggedInUserId(): string {
    let temp: string | null = localStorage.getItem(this.userkey);
    if(temp){
      let tempObj = JSON.parse(temp)
      return tempObj._id;
    }
    return ''
  }
}
