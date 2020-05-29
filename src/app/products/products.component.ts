import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './../products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public filteredProductsData: Product[];

  public currentPage = 0;

  public totalProductResult: number;

  public pageValue: number[] = [];

  public showPopUp: boolean;

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    const totalItemsPerPage = this.productService.TOTAL_ITEMS_PER_PAGE;
    this.totalProductResult = Math.ceil(
      this.productService.productArr.length / totalItemsPerPage
    );
    this.filteredProductsData = this.productService.getProducts(
      this.currentPage
    );
    this.pageValue = Array(this.totalProductResult).fill(0);
  }

  isPopupDisplayed(event) {
    this.showPopUp = event;
  }

  filteredData(event) {
    this.filteredProductsData = event;
  }

  addNewProductInfo(product: Product) {
    console.log(product);
    this.productService.addProducts(product).then((products) => {
      this.filteredProductsData = products;
    });
  }
}
