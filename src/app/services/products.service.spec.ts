import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ProductsService } from './products.service';

describe('Provider: Products', () => {
  let productsService;

  let service: ProductsService;
  let injector: TestBed;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    // Arrange
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
    injector = getTestBed();
    service = TestBed.get(ProductsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    productsService = null;
  });

  it('should have a non empty array called products', () => {
    // Act
    const products = service.products;

    // Assert
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);
  });
});
