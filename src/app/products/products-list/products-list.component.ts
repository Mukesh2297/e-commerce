import { Component, OnInit, Input } from '@angular/core';
import { ProductsService, Sorting } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() public filteredProducts;

  @Input() public pageValue;

  public sorting: Sorting[];

  public btnValue = 0;

  constructor(public productService: ProductsService) {}

  ngOnInit() {
    this.sorting = this.productService.sortProducts;
  }

  sortProducts(event) {
    console.log(event.target.value);
    this.filteredProducts = this.productService.sortProduct(event.target.value);
    console.log(this.filteredProducts);
  }

  changePage(currentPage) {
    this.btnValue = currentPage;
    this.filteredProducts = this.productService.getProducts(currentPage);
  }
}
