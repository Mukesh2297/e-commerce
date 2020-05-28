import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productCategory: string[] = ['Groceries', 'Electronics', 'Fitness', 'Clothing'];



  public productArr: {imageSource: string, productTitle: string, productPrice: string}[] = [
    {imageSource: './../assets/food-product.png', productTitle: 'TestProduct1', productPrice: '20$'},
    {imageSource: './../assets/food-product.png', productTitle: 'TestProduct2', productPrice: '30$'},
    {imageSource: './../assets/food-product.png', productTitle: 'TestProduct3', productPrice: '50$'}
  ];

  constructor() { }
}
