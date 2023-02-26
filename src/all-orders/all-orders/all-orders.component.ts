import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/core/cart.service';
import { IOrder } from 'src/model/order.model';
import { IProductByOrder } from 'src/model/productsByOrder.model';

@Component({
  selector: 'app-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  productsGroupedByOrderNo: IProductByOrder[] = [];
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.productsGroupedByOrderNo = [];
    this.cartService.getAllOrders().subscribe((orders) => {
      orders.forEach((order) => {
        let existingOrderNoObject = this.productsGroupedByOrderNo.find(
          (o) => o.orderNo === order.orderNumber
        );
        if (!existingOrderNoObject) {
          existingOrderNoObject = this.convertOrder(order);
          this.productsGroupedByOrderNo.push(existingOrderNoObject);
        }
        existingOrderNoObject.productList.push(order);
        existingOrderNoObject.numberOfProducts += 1;
      });
    });
  }

  convertOrder(order: IOrder): IProductByOrder {
    return {
      orderNo: order.orderNumber,
      numberOfProducts: 0,
      createdBy: order.createdBy,
      productList: [],
    };
  }
}
