import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() pdt: Product;

  constructor() {}

  ngOnInit(): void {}
}
