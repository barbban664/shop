import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from './product';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

@Input() products: product[];

// count = 0; 
// counter: EventEmitter<any> = new EventEmitter<any>();

constructor(private http: HttpClient,
  private CartService: CartService){ }

  ngOnInit() {
    this.http.get('http://localhost:8443/api/product/list').subscribe(
      (result: product[])=> {
        this.products = result.map((p: any) => {
          p['image'] = p.img;
          delete p.img;
          return p;
        });
      },
      (err)=> {
        console.error(err);
      },
    );

  }

  addProduct(product: product) {
    this.CartService.add(product);
    console.log(product)
  }

  //  addProduct(){
  //    this.count ++;
  //    this.counter.emit(this.count);
  //  }
 
}
