import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/core/cart.service';
import { IProduct } from '../model/product.model';

interface IViewData {
  product: IProduct;
  count: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  gridData: IViewData[] = [];

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.fetchCartProduct();
  }

  fetchCartProduct() {
    console.log('fetch', this.cartService.lstCartItems);
    console.log('fetch', this.cartService.lstCartItems.length);
    this.gridData = [];
    for (let i = 0; i < this.cartService.lstCartItems.length; i++) {
      let index = this.productAtGridDataIndex(this.cartService.lstCartItems[i]);
      if (index > -1) {
        this.gridData[index].count++;
      } else {
        this.gridData.push({
          product: this.cartService.lstCartItems[i],
          count: 1,
        });
        console.log(' this.gridData[0].product', this.gridData[0].product);
      }
    }
    console.log('res->', this.gridData);
  }

  productAtGridDataIndex(product: IProduct): number {
    return this.gridData.findIndex(
      (t) => t.product.productId === product.productId
    );
  }
}
