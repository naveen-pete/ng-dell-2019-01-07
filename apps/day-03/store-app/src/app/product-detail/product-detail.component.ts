import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from './../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Input() product: Product = new Product();
  s: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.s = this.productsService.productCreated.subscribe(
      (product) => {
        console.log('Handled product created event:', product);
      }
    );
  }

  ngOnDestroy() {
    this.s.unsubscribe();
  }

}
