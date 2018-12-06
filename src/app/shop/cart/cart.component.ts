import { Component, OnInit } from '@angular/core';
import { product } from '../products/product';
import { CartService } from '../../services/cart.service'
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: product[] = [];

  constructor(private CartService: CartService,
    private ImageService: ImageService) { }

  ngOnInit() {
    this.cart = this.CartService.get();

  }

  change(product){
    this.ImageService.changeFoto(product);
    }

    // removeFromCart(product){
    //   this.CartService.remove(product);
    //   console.log(this.CartService.idx)
    // }

}

