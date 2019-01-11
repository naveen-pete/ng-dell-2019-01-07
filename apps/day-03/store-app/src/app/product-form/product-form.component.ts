import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  showMessage = false;

  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form submitted.');

    this.productCreated.emit(this.product);

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
