import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  /**
   * 
   * @param quantity Quantity of products that you want to retrieve
   */
  getProducts(quantity: number): Observable<Product[]> {
    return this._http.get<Product[]>(`${env.API_URL}/products?limit=${quantity}`);
  }
}
