import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { PurchaseProductsComponent } from './purchase-products/purchase-products.component';
import { CoreModule } from 'src/core/core.module';
import { CartComponent } from './cart/cart.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    PurchaseProductsComponent,
    CartComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    CoreModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [ProductComponent,
            AddProductComponent,
            PurchaseProductsComponent,
            CartComponent
          ]
})
export class ProductModule { }
