import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnChanges {
  public productArr = [];

  @Input() public filteredProducts;

  @Input() public allProducts;

  constructor(public productService: ProductsService) {}

  ngOnInit() {
    this.productArr = this.productService.displayProduct;
  }

  ngOnChanges() {
    console.log('Change detection');
    if (this.productService.isFiltered === true) {
      this.productArr = this.filteredProducts;
      console.log(this.productService.isFiltered);
    } else {
      this.productArr = this.productService.displayProduct;
    }
  }
}
