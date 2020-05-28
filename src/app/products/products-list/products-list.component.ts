import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public productArr = [];

  constructor(public productService: ProductsService){
    this.productArr = productService.productArr;
   }

  ngOnInit(): void {
  }

}
