import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsService } from 'src/app/services/products-service.service';
import { CartService } from 'src/app/services/cart.service';
import { HomeComponent } from './home.component';
import { Toast } from '../../../mocks/mockToast';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  //@ts-ignore
  window.bootstrap = {
    Toast: Toast
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HomeComponent ],
      providers: [ProductsService, CartService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add products to cart', () => {
    const service = new CartService();
    const sampleProduct = {
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
    component.addToCart(sampleProduct);
    expect(component.productAddedToCart.image.length).toBeGreaterThan(1);
    expect(component.productAddedToCart.title.length).toBeGreaterThan(1);
    expect(component.productAdded).toBeTrue();
    setTimeout(() => {
      expect(service.cartProducts.length).toBeGreaterThan(0);
    }, 500);
  });
});
