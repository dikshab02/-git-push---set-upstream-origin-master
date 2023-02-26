import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AllOrdersRoutingModule } from './allOrders-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AllOrdersComponent
  ],
  imports: [
    CommonModule,
    AllOrdersRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
  ],
  exports: [AllOrdersComponent]
})
export class AllOrdersModule { }
