import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showMessage = false;

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

  product: Product = new Product();

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log('Form submitted.');
    this.products.unshift(this.product);
    this.product = new Product();
    this.showMessage = true;

    // const obj = this;
    // setTimeout(function() {
    //   console.log('this:', obj);
    //   obj.showMessage = false;
    //   console.log('Timeout callback called. showMessage property reset to false.');
    // }, 4000);

    setTimeout(() => {
      console.log('this:', this);
      this.showMessage = false;
      console.log('Timeout callback called. showMessage property reset to false.');
    }, 4000);

  }

}
