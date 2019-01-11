import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product = {
    id: 1,
    name: 'Dell Latitude',
    description: 'This laptop is good for business purpose',
    price: 60000,
    isAvailable: false
  };

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log('Save button clicked');
  }

  onNameChange(e) {
    console.log(e.target.value);
    console.log('Product name changed event');
  }
}
