import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './../products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public filteredProductsData: Product[];

  public showPopUp: boolean;

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.filteredProductsData = this.productService.getProducts();
    if (this.filteredProductsData.length > 9) {
      this.filteredProductsData.splice(9);
    }
  }

  isPopupDisplayed(event) {
    this.showPopUp = event;
  }

  filteredData(event) {
    this.filteredProductsData = event;
  }
}
