import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DialogData } from '../product/product.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-purchase-products',
  templateUrl: './purchase-products.component.html',
  styleUrls: ['./purchase-products.component.scss']
})
export class PurchaseProductsComponent implements OnInit {
  purchaseForm = new FormGroup({
    quantity: new FormControl<number>(0)
  })
  constructor(public dialogRef: MatDialogRef<PurchaseProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick1() {
    this.dialogRef.close();
  }

  submitForm1() {
  }

}
