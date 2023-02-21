import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from './model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    //api call for adding product
    addProduct(product: IProduct): Observable<IProduct[]> {
      let url = environment.apiUrl + 'prod/';
      return this.http.post<IProduct[]>(url, product);
    }

    //api call to show product details in grid
    getProductInGrid(): Observable<IProduct[]> {
      let url = environment.apiUrl + 'prod/';
      return this.http.get<IProduct[]>(url);
    }

    //api call to update the product details in DB
    updateProductInDB(product: IProduct): Observable<IProduct[]> {
      let url = environment.apiUrl + 'prod/';
      return this.http.put<IProduct[]>(url, product);
    }

}
