import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productName = 'Dell XPS';

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
