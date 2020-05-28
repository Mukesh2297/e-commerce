import { Injectable } from '@angular/core';

export interface Product {
  imageSource: string;
  productTitle: string;
  productPrice: string;
  productCategory: string;
  topProduct: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public productCategory: string[] = [
    'Groceries',
    'Electronics',
    'Fitness',
    'Clothing',
  ];

  public isFiltered = false;

  public productArr: Product[] = [
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct1',
      productPrice: '20',
      productCategory: 'groceries',
      topProduct: false,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct2',
      productPrice: '30',
      productCategory: 'groceries',
      topProduct: false,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct3',
      productPrice: '50',
      productCategory: 'groceries',
      topProduct: true,
    },
    {
      imageSource: './../assets/sandisk-pendrive.jpg',
      productTitle: 'Sandisk Pendrive',
      productPrice: '60',
      productCategory: 'electronics',
      topProduct: false,
    },
  ];

  constructor() {}

  getProducts() {
    return this.productArr;
  }

  addProducts(newProd: Product) {
    this.productArr.push(newProd);
  }

  filterProduct(category: string) {
    this.isFiltered = true;
    return this.productArr.filter(
      (pdtObj) =>
        pdtObj.productCategory.toLowerCase() === category.toLowerCase()
    );
  }

  reset() {
    this.isFiltered = false;
    return this.productArr;
  }
}
