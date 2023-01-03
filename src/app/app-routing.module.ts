import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home/home.component';
import { LoginComponent } from 'src/login/login/login.component';
import { UserLoggedInService } from './user-logged-in.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/home/home.module').then(m => m.HomeModule),
    canActivate: [UserLoggedInService]
  },
  {
    path: 'login',
    loadChildren: () => import('src/login/login.module').then(n => n.LoginModule)
  },
  {
    path: 'product',
    loadChildren: () => import('src/product/product.module').then(m => m.ProductModule),
    canActivate: [UserLoggedInService]
  },
  {
    path: 'myOrders',
    loadChildren: () => import('src/my-orders/my-orders.module').then(m => m.MyOrdersModule),
    canActivate: [UserLoggedInService]
  },
  {
    path: 'orders',
    loadChildren: () => import('src/orders/orders.module').then(m => m.OrdersModule),
    canActivate: [UserLoggedInService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
