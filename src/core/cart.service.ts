import { Injectable } from '@angular/core';
import { IProduct } from 'src/product/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  lstCartItems: IProduct[] = [];
  constructor() { }

  addToCart(product: IProduct) {
    console.log("product in service-> ",product)
    this.lstCartItems.push(product);
    console.log("list of cart items-> ", this.lstCartItems)
  }

  getItems() {
    return this.lstCartItems;
  }

  clearCart() {
    this.lstCartItems = [];
    return this.lstCartItems;
  }
}
