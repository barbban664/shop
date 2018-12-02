import { Injectable } from '@angular/core';
import { product } from '../shop/products/product'

@Injectable()
export class CartService {

  constructor() { }

  cart: product[] = [];

  get(key: string) {
    let val = sessionStorage.getItem(key);
    return JSON.parse(val);
  }
  add(Product: product) {
    this.cart.push(Product);
  }

}