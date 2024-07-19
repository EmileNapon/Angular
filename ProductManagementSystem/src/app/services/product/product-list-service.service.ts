import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {

  constructor( private http: HttpClient ) { }

  apiUrl="http://localhost:3000/products"

getData(): Observable<Product[]>{
  return this.http.get<Product[]>(this.apiUrl)
}

}
