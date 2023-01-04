import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { IProduct } from '../model/product.model';

@Component({
  selector: 'app-purchase-products',
  templateUrl: './purchase-products.component.html',
  styleUrls: ['./purchase-products.component.scss'],
})
export class PurchaseProductsComponent implements OnInit {
  purchaseForm = new FormGroup({
    quantity: new FormControl<number>(0),
  });
  constructor(
    public dialogRef: MatDialogRef<PurchaseProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick1() {
    this.dialogRef.close();
  }

  submitQuantityForm() {
    console.log('data -> ', this.data);
    let quantity = this.purchaseForm.controls.quantity.value;
    const buyDate = new Date();
    this.data['procurementDate'] = buyDate;
    if (this.data.stockQuantity === undefined) this.data['stockQuantity'] = quantity ? +quantity : 0;
    else this.data.stockQuantity += (quantity ? +quantity : 0);
    // this.data['quantity'] = (this.data['quantity'] ? this.data['quantity'] : 0) + quantity;
    this.productService.updateProductInDB(this.data).subscribe((temp)=>{
      console.log("api->", this.data)
      this.dialogRef.close();
    })
  }
}
