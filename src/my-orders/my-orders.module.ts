import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyOrdersRoutingModule } from './myOrders-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [MyOrdersComponent],
  imports: [
    CommonModule,
    MyOrdersRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
  ],
  exports: [MyOrdersComponent],
})
export class MyOrdersModule {}
