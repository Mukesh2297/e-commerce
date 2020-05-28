import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public filteredProductsData: string[];

  public noFilteredProducts: string[];

  constructor() {}

  ngOnInit(): void {}

  filteredData(event) {
    this.filteredProductsData = event;
  }

  noFilter(event) {
    this.noFilteredProducts = event;
  }
}
