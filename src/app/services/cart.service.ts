import { Injectable } from '@angular/core';
import { product } from '../shop/products/product';
import { UserService} from './user.service';

@Injectable()
export class CartService {

  constructor(private userService: UserService) { }

  cart: product[] = [];
  idx: number;
  sum: number =0;

  add(Product: product) {
    this.cart = this.userService.user('cart');
    if (this.cart == null) {
      this.cart = [];
    }
    this.cart.push(Product);
    this.userService.set('cart', this.cart);
  }

  get() {
    this.cart = this.userService.user('cart');
    if (this.cart == null){
      return [];
    }
    return this.cart;
  }

  get productsCart() {
      return this.get().length;
  }

  remove(product: product, cart) {

    this.idx = cart.findIndex((item) => item.id == product.id);
    if (this.idx !== -1) {
      cart.splice(this.idx, 1);
      this.userService.set('cart', cart);
    }
    return cart;
  }

}

