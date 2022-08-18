import { Component, IterableDiffers, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  total: number[] = [];
  constructor(private _cartService: CartService) { }
  ngOnInit(): void {
    this.products = this._cartService.cartProducts;
    this.total = this._cartService.total;
  }
  /**
   * 
   * @param product The product that we want to delete from cart
   */
  deleteProduct(product: Product) {
    const productToDelete: Product = product;
    this._cartService.cartProducts.forEach((product, index) => {
      if (product.id === productToDelete.id) {
        this._cartService.cartProducts.splice(index, 1);
        return this._cartService.calculateTotal();
      }
    });
  }

}
