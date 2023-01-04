import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeModule } from '../home/home.module';
import { ProductModule } from '../product/product.module';
import { MyOrdersModule } from 'src/my-orders/my-orders.module';
import { OrdersModule } from '../orders/orders.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    HomeModule,
    ProductModule,
    MyOrdersModule,
    OrdersModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class AppModule {}
