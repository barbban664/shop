import { Component, OnInit } from '@angular/core';
import { product } from '../products/product';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: product[] = [];

  constructor(private CartService: CartService) { }

  ngOnInit() {
    this.cart = this.CartService.get();

  }

}

