import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products-service.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quantity: number = 15;
  products: Product[] = [];
  productAddedToCart: {title: string; image: string} = {
    image: '',
    title: ''
  };
  productAdded: boolean = false;
  constructor(private _productService: ProductsService, private _cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts(this.quantity);
  }
  getProducts(quantity: number) {
    this._productService.getProducts(quantity).subscribe((products: Product[]) => {
      this.products = products;
      this.products.map(product => product.quantity = 1);
      console.log(products);
    });
  }
  addToCart(product: Product) {
    this.productAddedToCart.image = product.image;
    this.productAddedToCart.title = product.title;
    this.productAdded = this._cartService.addProduct(product);
    const productAddedToast = document.getElementById('product-added-toast');
    //@ts-ignore
    const toast = new window.bootstrap.Toast(productAddedToast)
    toast.show()
  }
}
