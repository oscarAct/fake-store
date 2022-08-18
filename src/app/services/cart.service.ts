import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartProducts: Product[] = [];
  public total: number[] = [0];
  constructor() { }
  
  addProduct(product: Product): boolean {
    if(this.cartProducts.filter(prod => prod.id === product.id).length > 0) {
        this.cartProducts.forEach(element => {
            if(element.id === product.id) {
                element.quantity += 1;
            }
        });
        this.calculateTotal();
        return true;
    }else {
        this.cartProducts.push(product);
        this.calculateTotal();
        return true;
    }
  }
  calculateTotal() {
    let count = 0;
      this.cartProducts.forEach((product: Product, index: number) => {
        count+= product.price * product.quantity;
      });
      this.total[0] = count;
  }
}
