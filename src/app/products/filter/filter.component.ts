import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public productCategory: string[];

  public isFilterApplied = false;

  @Output() filteredProducts = new EventEmitter<any>();

  constructor(private productService: ProductsService) {
    this.productCategory = productService.productCategory;
  }

  ngOnInit(): void {}

  filterProduct(event) {
    const filteredProduct = this.productService.filterProduct(
      event.target.value
    );
    this.isFilterApplied = this.productService.isFiltered;
    this.filteredProducts.emit(filteredProduct);
  }

  reset() {
    const filteredProduct = this.productService.reset();
    this.isFilterApplied = this.productService.isFiltered;
    this.filteredProducts.emit(filteredProduct);
  }
}
