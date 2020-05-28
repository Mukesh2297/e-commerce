import { Injectable } from '@angular/core';

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

  public productArr: {
    imageSource: string;
    productTitle: string;
    productPrice: string;
    category: string;
  }[] = [
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct1',
      productPrice: '20$',
      category: 'groceries',
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct2',
      productPrice: '30$',
      category: 'groceries',
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct3',
      productPrice: '50$',
      category: 'groceries',
    },
    {
      imageSource: './../assets/sandisk-pendrive.jpg',
      productTitle: 'Sandisk Pendrive',
      productPrice: '60$',
      category: 'electronics',
    },
  ];

  public displayProduct: {
    imageSource: string;
    productTitle: string;
    productPrice: string;
    category: string;
  }[] = this.productArr;

  constructor() {}

  filterProduct(category: string) {
    return this.displayProduct.filter(
      (pdtObj) => pdtObj.category === category.toLowerCase()
    );
  }
}
