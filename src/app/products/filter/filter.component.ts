import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  value = 0;
  options: Options = { floor: 0, ceil: 200 };

  public productCategory: string[];

  public isFilterApplied = false;

  public topProducts: Product[] = [];

  @Output() filteredProducts = new EventEmitter<any>();

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productCategory = this.productService.productCategory;
    this.topProducts = this.productService.productArr.filter((pdtObj) => {
      return pdtObj.topProduct === true;
    });
    console.log(this.topProducts);
  }

  filterProduct(event) {
    const filteredProduct = this.productService.filterProduct(
      event.target.value
    );
    this.isFilterApplied = this.productService.isFiltered;
    this.filteredProducts.emit(filteredProduct);
  }

  filterProductByPrice() {
    const filteredProduct = this.productService.filterProductByPrice(
      this.value
    );
    this.isFilterApplied = this.productService.isFiltered;
    this.filteredProducts.emit(filteredProduct);
  }

  reset() {
    const filteredProduct = this.productService.reset();
    this.value = 0;
    this.isFilterApplied = this.productService.isFiltered;
    this.filteredProducts.emit(filteredProduct);
  }
}
