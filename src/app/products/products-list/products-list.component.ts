import { Component, OnInit, Input } from '@angular/core';
import { ProductsService, Sorting } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() public filteredProducts;

  public sorting: Sorting[];

  constructor(public productService: ProductsService) {}

  ngOnInit() {
    this.sorting = this.productService.sortProducts;
  }

  sortProducts(event) {
    console.log(event.target.value);
  }
}
