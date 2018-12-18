import { Component, OnInit } from '@angular/core';
import { product } from '../products/product';
import { CartService } from '../../services/cart.service'
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: product[] = [];

  constructor(private CartService: CartService,
    private productService: ProductService) { }

  ngOnInit() {
    this.cart = this.CartService.get();

  }
  change(product){
    this.productService.changeFoto(product);
    }

    removeFromCart(product) {
      
      this.CartService.remove(product, this.cart);  
    }

}

