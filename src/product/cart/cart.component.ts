import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/core/cart.service';
import { IOrder } from 'src/model/order.model';
import { IProduct } from '../model/product.model';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { IUser } from 'src/model/user.model';

export interface cartTile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  gridData: IOrder[] = [];
  myTiles: cartTile[] = [
    { text: 'S.No.', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Product Name', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Count', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Action', cols: 1, rows: 1, color: 'lightblue' },
  ];

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCartProduct();
  }

  fetchCartProduct() {
    this.gridData = [];
    let orderNo = this.numberGenerator();
    for (let i = 0; i < this.cartService.lstCartItems.length; i++) {
      let index = this.productAtGridDataIndex(this.cartService.lstCartItems[i]);
      if (index > -1) {
        this.gridData[index].count++;
      } else {
        this.gridData.push({
          product: this.cartService.lstCartItems[i],
          count: 1,
          orderNumber: orderNo,
          createdBy: this.cartService.getLoggedInUserId(),
        });
      }
    }
  }

  //generate random id
  numberGenerator(): string {
    const dateStr = Date.now().toString(36); // convert num to base 36 and stringify
    const randomStr = Math.random().toString(36).substring(2, 8);
    return `${dateStr}-${randomStr}`;
  }

  productAtGridDataIndex(product: IProduct): number {
    return this.gridData.findIndex(
      (t) => t.product.productId === product.productId
    );
  }

  checkoutProducts() {
    let tempArr: Observable<IOrder>[] = [];
    for (let i = 0; i < this.gridData.length; i++) {
      let checkedObject: IOrder = this.gridData[i];
      tempArr.push(this.cartService.checkoutProducts(checkedObject));
    }
    forkJoin(tempArr).subscribe((g) => {
      console.log(g);
      this.clearCart();
      this.router.navigate(['myOrders']);
    });
  }

  reduceCount(row: { count: number; product: IProduct }) {
    if (row.count > 1) row.count = row.count - 1;
    else {
      let indexObjRemove = this.gridData.findIndex(
        (t) => t.product === row.product
      );
      this.gridData.splice(indexObjRemove, 1);
    }
    this.convertGridData();
  }

  addCount(row: { count: number; product: IProduct }) {
    if (row.count > 0) row.count = row.count + 1;
    this.convertGridData();
  }

  convertGridData() {
    let convertData = [];
    for (let i = 0; i < this.gridData.length; i++) {
      for (let j = 0; j < this.gridData[i].count; j++)
        convertData.push(this.gridData[i].product);
    }
    this.cartService.lstCartItems = convertData;
    this.cartService.saveToStorage();
    console.log('convertData->', convertData, 'griddata->', this.gridData);
  }

  clearCart() {
    this.gridData = [];
    this.cartService.clearCartItems();
    this.cartService.saveToStorage();
  }
}
