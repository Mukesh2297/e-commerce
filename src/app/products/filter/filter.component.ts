import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public productCategory: string[];

  // public productsObj = [];

  public isFilterApplied = false;

  @Output() filteredProducts = new EventEmitter<any>();

  @Output() allProducts = new EventEmitter<any>();

  constructor(private pdtService: ProductsService) {
    this.productCategory = pdtService.productCategory;
  }

  ngOnInit(): void {}

  filterProduct(event) {
    console.log(event.target.value);
    this.isFilterApplied = true;
    const filteredProduct = this.pdtService.filterProduct(event.target.value);
    this.filteredProducts.emit(filteredProduct);
    this.pdtService.isFiltered = true;
    console.log(this.pdtService.isFiltered);
  }

  removeFilter() {
    this.allProducts.emit(this.pdtService.displayProduct);
    this.pdtService.isFiltered = false;
    this.isFilterApplied = false;
  }
}
