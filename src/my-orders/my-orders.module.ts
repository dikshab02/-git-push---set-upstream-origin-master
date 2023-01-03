import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrdersRoutingModule } from './myOrders-routing.module';



@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    MyOrdersRoutingModule
  ],
  exports: [MyOrdersComponent]
})
export class MyOrdersModule { }
