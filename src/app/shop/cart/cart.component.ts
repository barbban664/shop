import { Component, OnInit, OnChanges, ChangeDetectorRef, SimpleChanges, Input } from '@angular/core';
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
  cartGroup: any = {};
  sums: Array<any> = [];
  // sums: any = {};
  sumProducts: any;
  groupedProducts: any;
  temp: Array<any> = [];

  constructor(private CartService: CartService,
    private productService: ProductService) { }

  ngOnInit() {
    this.cart = this.CartService.get();

    this.groupedProducts = this.groupProducts();

    this.sumProducts = this.sumPrice();
    console.log(this.sumProducts)

    this.cart.sort((a, b) => a.seller.localeCompare(b.seller));

  }

  change(product) {
    this.productService.changeFoto(product);
  }

  removeFromCart(product) {
    this.CartService.remove(product, this.cart);
    window.location.reload();
  }

  groupProducts() {
    this.cartGroup = this.cart.reduce((previous, current) => {
      if (!previous[current.seller]) {
        previous[current.seller] = [current];
      } else {
        previous[current.seller].push(current);
      }
      return previous;
    }, {});
    
    // console.log(Object.keys(this.cartGroup).map(key => ({ key, value: this.cartGroup[key] })));
    return Object.keys(this.cartGroup).map(key => ({ key, value: this.cartGroup[key] }));
  }

  sumPrice() {
    this.groupProducts().forEach((seller) => {
    this.sums[seller.key] = seller.value.reduce((sum, item) => sum + item.price, 0);
    });
    return Object.keys(this.sums).map(key => ({ key, value: this.sums[key] }));
    // console.log(Object.keys(this.sums).map(key => ({ key, value: this.sums[key] })));
    // console.log(this.sums[Object.keys(this.sums)[0]]);
  }


}

