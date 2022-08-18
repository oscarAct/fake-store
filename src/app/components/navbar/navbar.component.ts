import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartProducts: Product[] = [];
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.cartProducts = this._cartService.cartProducts;
  }

}
