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
  sum: number = 0;

  constructor(private CartService: CartService,
    private productService: ProductService) { }

  ngOnInit() {
    this.cart = this.CartService.get();

    this.cart.sort((a,b) => a.seller.localeCompare(b.seller));

      this.cart.forEach(product => {
        this.sum += product.price;
      });
  }

  change(product){
    this.productService.changeFoto(product);
    }

    removeFromCart(product) {
      
      this.CartService.remove(product, this.cart);  
      window.location.reload();
    }

}

