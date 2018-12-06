import { Injectable } from '@angular/core';
import { product } from '../shop/products/product';
import { UserService} from './user.service';

@Injectable()
export class CartService {

  constructor(private UserService: UserService) { }

  cart: product[] = [];
  idx: number;


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

  // remove(product) {
  //   this.cart= this.UserService.user('cart');

  //   // this.cart.splice(this.cart.indexOf(product), 1);
	// 	// 	}
  //    this.idx = this.cart.indexOf(product);
  //   // if (this.idx !== -1) {
  //   //     this.cart.splice(this.idx, 1);
  //   }        
  }
