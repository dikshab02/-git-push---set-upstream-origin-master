import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CrudHttpService } from 'src/app/crud-http.service';
import { IProduct } from '../model/product.model';
import { ProductService } from '../product.service';
import { DialogData } from '../product/product.component';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  popUpForm = new FormGroup({
    productName: new FormControl<string>(''),
    category: new FormControl<string>(''),
    description: new FormControl<string>('')
  });

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public productService: ProductService,
    public crudHttpService: CrudHttpService) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.dialogRef.close(this.popUpForm.value);
    let prodObject: IProduct = {
      productName: this.popUpForm.value.productName?this.popUpForm.value.productName:'',
      category: this.popUpForm.value.category?this.popUpForm.value.category:'',
      description: this.popUpForm.value.description?this.popUpForm.value.description:'',
      productId: this.genUniqueId(),
      createdBy: this.crudHttpService.getUser()?.email
    };
    this.productService.addProduct(prodObject).subscribe(()=>{
      console.log("productObject-> ", prodObject)
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }

 //generate random id
  genUniqueId(): string {
    const dateStr = Date
      .now()
      .toString(36); // convert num to base 36 and stringify
    const randomStr = Math
      .random()
      .toString(36)
      .substring(2, 8); // start at index 2 to skip decimal point
    return `${dateStr}-${randomStr}`;
  }

}
