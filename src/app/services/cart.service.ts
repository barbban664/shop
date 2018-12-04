import { Injectable } from '@angular/core';
import { product } from '../shop/products/product';
import { UserService} from './user.service';

@Injectable()
export class CartService {

  constructor(private UserService: UserService) { }

  cart: product[] = [];

  add(Product: product) {
    this.cart = this.UserService.user('cart');
    if (this.cart == null) {
      this.cart = [];
    }
    this.cart.push(Product);
    this.UserService.set('cart', this.cart);
  }

  get() {
    this.cart = this.UserService.user('cart');
    return this.cart;
  }

  get productsCart() {
    return this.cart.length;
  }

}