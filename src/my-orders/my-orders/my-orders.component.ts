import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from 'src/app/crud-http.service';
import { CartService } from 'src/core/cart.service';
import { IOrder } from 'src/model/order.model';
import { IProductByOrder } from 'src/model/productsByOrder.model';

@Component({
  selector: 'app-myOrders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
  productsGroupedByOrderNo: IProductByOrder[] = [];
  longText = `The Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, Inu was originally bred for hunting.`;

  constructor(
    public cartService: CartService,
    private crudHttpService: CrudHttpService
  ) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.productsGroupedByOrderNo = [];
    this.cartService.getOrders().subscribe((orders) => {
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
      console.log('productsGroupedByOrderNo=', this.productsGroupedByOrderNo);
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
