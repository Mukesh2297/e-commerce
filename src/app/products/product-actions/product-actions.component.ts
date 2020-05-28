import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.css'],
})
export class ProductActionsComponent implements OnInit {
  public productCategory: string[];

  public showPopup = false;

  @ViewChild('addPdt') private formDirective: NgForm;

  constructor(public productService: ProductsService) {}

  ngOnInit() {}

  displayAddProduct() {
    this.showPopup = true;
  }

  addProduct(productDetails) {}
}
