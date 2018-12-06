import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { product } from '../shop/products/product';
import { CartService } from './cart.service';

@Injectable()
export class ImageService {

    @Input() products: product[];

  constructor(private CartService: CartService) {}

  changeFoto(product){
    product.count= product.count +1;
    if (product.count == product.img.length){
      product.count= 0
    }
 }
}
