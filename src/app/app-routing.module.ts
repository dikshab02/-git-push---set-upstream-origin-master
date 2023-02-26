import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckIfAdmin } from 'src/core/check-if-admin.route-guard';
import { CheckIfUserLoggedIn } from '../core/check-if-user-logged-in.route-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/home/home.module').then(m => m.HomeModule),
    canActivate: [CheckIfUserLoggedIn]
  },
  {
    path: 'login',
    loadChildren: () => import('src/login/login.module').then(n => n.LoginModule)
  },
  {
    path: 'product',
    loadChildren: () => import('src/product/product.module').then(m => m.ProductModule),
    canActivate: [CheckIfUserLoggedIn]
  },
  {
    path: 'myOrders',
    loadChildren: () => import('src/my-orders/my-orders.module').then(m => m.MyOrdersModule),
    canActivate: [CheckIfUserLoggedIn]
  },
  {
    path: 'allOrders',
    loadChildren: () => import('src/all-orders/all-orders.module').then(m=>m.AllOrdersModule),
    canActivate: [CheckIfUserLoggedIn, CheckIfAdmin]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
