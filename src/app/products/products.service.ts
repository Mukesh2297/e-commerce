import { Injectable } from '@angular/core';
import { type } from 'os';

export interface Product {
  imageSource: string;
  productTitle: string;
  productPrice: string;
  productCategory: string;
  topProduct: boolean;
}

export interface Sorting {
  sortValue: number;
  sortString: string;
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

  public sortProducts: Sorting[] = [
    { sortValue: 0, sortString: 'default sorting' },
    { sortValue: 1, sortString: 'price low to high' },
    { sortValue: 2, sortString: 'price high to low' },
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
      topProduct: true,
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
      topProduct: true,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct6',
      productPrice: '10',
      productCategory: 'groceries',
      topProduct: false,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct7',
      productPrice: '30',
      productCategory: 'groceries',
      topProduct: false,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct8',
      productPrice: '150',
      productCategory: 'groceries',
      topProduct: false,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct9',
      productPrice: '67',
      productCategory: 'groceries',
      topProduct: false,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct9',
      productPrice: '88',
      productCategory: 'groceries',
      topProduct: false,
    },
    {
      imageSource: './../assets/food-product.png',
      productTitle: 'TestProduct10',
      productPrice: '92',
      productCategory: 'groceries',
      topProduct: true,
    },
  ];

  constructor() {}

  getProducts() {
    return this.productArr;
  }

  addProducts(newProd: Product) {
    this.productArr.push(newProd);
  }

  filterProduct(category) {
    this.isFiltered = true;
    return this.productArr.filter(
      (pdtObj) =>
        pdtObj.productCategory.toLowerCase() === category.toLowerCase()
    );
  }

  filterProductByPrice(priceValue) {
    this.isFiltered = true;
    return this.productArr.filter(
      (pdtObj) => Number(pdtObj.productPrice) >= priceValue
    );
  }

  // sortProduct(sortValue) {
  //   return this.productArr.sort(() => {});
  // }

  reset() {
    this.isFiltered = false;
    return this.productArr;
  }
}
