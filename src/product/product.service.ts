import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from './model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
    private router: Router ) { }

    //api call for adding product
    addProduct(product: IProduct): Observable<IProduct[]> {
      let url = environment.apiUrl + 'prod/';
      return this.http.post<IProduct[]>(url, product);
    }
}
