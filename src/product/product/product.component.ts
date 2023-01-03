import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  id: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id: string | undefined;
  name: string | undefined = 'Add Product';

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }


    addProduct(): void {
      const dialogRef = this.dialog.open(AddProductComponent, {
        width: '800px',
        data: { id: this.id, name: this.name},
      });

      dialogRef.afterClosed().subscribe((inv: any) => {

        console.log('The dialog was closed1', inv);

      });


  }
}
