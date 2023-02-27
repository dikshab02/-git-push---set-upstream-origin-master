import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchProduct(text: any){
    console.log("text->",text);
    let url = environment.apiUrl + 'search?searchString=' + text;
    return this.http.get<String>(url);
  }

}
