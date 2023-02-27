import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../product.service';
import { IProduct } from '../model/product.model';
import { PurchaseProductsComponent } from '../purchase-products/purchase-products.component';
import { CartService } from 'src/core/cart.service';

export interface DialogData {
  name: string;
  id: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: string | undefined;
  name: string | undefined = 'Add Product';
  products: IProduct[] | undefined;
  mytiles: Tile[] = [
    { text: 'Product Name', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Quantity in stock', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Category', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Procurement date', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Orders Pending', cols: 1, rows: 1, color: 'lightblue' },
    { text: 'Actions', cols: 1, rows: 1, color: 'lightblue' },
  ];

  constructor(
    public dialog: MatDialog,
    public productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProductInGrid();
  }

  //add product button
  addNewProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '800px',
      data: { id: this.id, name: this.name },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getProductInGrid();
    });
  }

  //procure button
  addQuantity(row: IProduct): void {
    // console.log("row-> ", row);
    const dialogRef = this.dialog.open(PurchaseProductsComponent, {
      width: '300px',
      data: row,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getProductInGrid();
    });
  }

  getProductInGrid() {
    const productDetail = this.productService.getProductInGrid();
    productDetail.subscribe((prod) => {
      this.products = prod;
      console.log('prod-> ', prod);
    });
    console.log('products-> ', this.products);
  }

  addToCart(product: IProduct) {
    console.log('product-> ', product);
    this.cartService.addToCart(product);
  }

  editProductDetails(product: IProduct){

  }
}
