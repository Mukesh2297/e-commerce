import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  public productCategory: string[];

  public showPopup = false;

  @ViewChild('addPdt') private formDirective: NgForm;

  constructor(private productService: ProductsService) {
    this.productCategory = productService.productCategory;
  }

  ngOnInit(): void {}

  displayAddProduct() {
    this.showPopup = true;
  }

  addProduct(productDetails) {
    console.log(productDetails.value);
  }
}
