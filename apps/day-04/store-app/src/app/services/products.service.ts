import { Injectable, EventEmitter } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productCreated: EventEmitter<Product> = new EventEmitter<Product>();

  private products: Product[] = [
    {
      id: 1,
      name: 'Dell Latitude',
      price: 50000,
      description: 'A laptop for daily use',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Dell Inspiron',
      price: 40000,
      description: 'A laptop for business use',
      isAvailable: true
    },
    {
      id: 3,
      name: 'Dell XPS',
      price: 70000,
      description: 'A laptop for gaming',
      isAvailable: false
    },
  ];

  getProducts(): Product[] {
    console.log('ProductsService.getProducts() invoked.');
    return this.products;
  }

  addProduct(product: Product) {
    console.log('ProductsService.addProduct() invoked.');
    this.products.unshift(product);
    this.productCreated.emit(product);
  }
}

