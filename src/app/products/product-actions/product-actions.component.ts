import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.css'],
})
export class ProductActionsComponent implements OnInit {
  public productCategory: string[];

  public showPopup = false;

  @Output() hidePopup = new EventEmitter<boolean>();

  @Output() addNewProduct = new EventEmitter<Product>();

  constructor(public productService: ProductsService) {}

  ngOnInit() {
    this.productCategory = this.productService.productCategory;
  }

  displayAddProduct() {
    this.showPopup = true;
  }

  closePopup() {
    this.hidePopup.emit(false);
  }

  addProduct(productDetails) {
    const img = (document.getElementById('selectFile') as HTMLInputElement)
      .files[0];
    const newProduct = {
      ...productDetails.value,
      imageSource: img,
    };

    this.addNewProduct.emit(newProduct);
    this.hidePopup.emit(false);
  }

  uploadImage() {}
}
