import { ComponentFixture, TestBed } from '@angular/core/testing';
import { sample } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [{ provide: CartService, useClass: CartService , }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should delete products form cart', () => {
    const sampleProduct: Product = {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      },
      "quantity": 1
    };
    const service = new CartService();
    service.cartProducts.push(sampleProduct);
    expect(service.cartProducts.length).toBeGreaterThan(0);
    component.deleteProduct(sampleProduct);
    setTimeout(() => {
      expect(service.cartProducts.length).toBe(0);
    }, 2000);
  })
});
