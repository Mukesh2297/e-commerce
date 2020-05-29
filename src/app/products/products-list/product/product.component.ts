import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() pdt: Product;

  @Output() editProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  edit(pdt) {
    this.editProduct.emit(pdt);
  }
}
