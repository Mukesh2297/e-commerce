import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
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

  @Output() hidePopup = new EventEmitter<boolean>();

  @ViewChild('addPdt') private formDirective: NgForm;

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
    let newProduct = {
      ...productDetails.value,
      imageSource: null,
    };

    console.log(newProduct);

    const img = (document.getElementById('selectFile') as HTMLInputElement)
      .files[0];

    const fr = new FileReader();
    fr.onload = () => {
      newProduct = { ...newProduct, imageSource: fr.result };

      this.productService.addProducts(newProduct);
    };
    fr.readAsDataURL(img);

    this.hidePopup.emit(false);
  }

  uploadImage() {}
}
