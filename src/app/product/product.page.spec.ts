import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductsService } from '../services/products.service';

import { ProductPage } from './product.page';

describe('Page: Product Page', () => {
  let component: ProductPage;
  let fixture: ComponentFixture<ProductPage>;
  let app;
  let compiled;
  let debugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPage],
      providers: [ProductsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(ProductPage);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    app = debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  }));

  afterEach(() => {
    fixture.destroy();
    debugElement = null;
    component = null;
    app = null;
    compiled = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('displays products containing a title, description, and price in the list', () => {
    const productsService = fixture.debugElement.injector.get(ProductsService);
    const firstProduct = productsService.products[0];

    fixture.detectChanges();

    const ionItem = fixture.debugElement.query(By.css('ion-list ion-item'));
    const element = ionItem.nativeElement;

    expect(element.textContent).toContain(firstProduct.title);
    expect(element.textContent).toContain(firstProduct.description);
    expect(element.textContent).toContain(firstProduct.price);
  });
});
