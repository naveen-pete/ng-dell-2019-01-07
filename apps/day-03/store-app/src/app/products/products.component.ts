import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
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

  constructor() { }

  ngOnInit() { }

  onProductCreated(product: Product) {
    this.products.unshift(product);
    console.log('productCreated event handled.');
  }
}
