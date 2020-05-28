import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductsService } from './../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public filteredProductsData: Product[];

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.filteredProductsData = this.productService.getProducts();
  }

  filteredData(event) {
    this.filteredProductsData = event;
  }
}
