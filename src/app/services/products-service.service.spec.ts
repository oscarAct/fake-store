import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products-service.service';
import { environment as env } from 'src/environments/environment';
import { mockProductArray } from 'src/mocks/mockProductsArray';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ProductsServiceService', () => {
  let service: ProductsService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getProducts and return an array of products', () => {
    const qty = 15;
    service.getProducts(qty).subscribe((res) => {
      expect(res).toEqual(mockProductArray);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: `${env.API_URL}/products?limit=${qty}`,
    });
    req.flush(mockProductArray);
  });
});
