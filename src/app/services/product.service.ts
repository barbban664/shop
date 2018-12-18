import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { product } from '../shop/products/product';
import { HttpClient } from '@angular/common/http';
import { Rest } from './rest';
import { UserService } from './user.service';

interface addProductData {
  producer;
  description;
  img;
  tags;
  price;
  name;
  userId;
}


@Injectable()
export class ProductService extends Rest {

    @Input() products: product[];
    url: any;
    isEditProduct: number;

  constructor(private http: HttpClient,
              private userService: UserService) {
    super();
  }

  addProduct(data: addProductData){

    return this.http.post(this.url + 'product/add', data);
    };

  changeFoto(product){
    product.count= product.count +1;
    if (product.count == product.img.length){
      product.count= 0
    }
 };

  deleteProduct (productId: number, userId: number){
    return this.http.delete(this.url + `product/remove/${productId}/${userId}`);
  }
  editProduct( productId: number, product){
    console.log('edycja')
    return this.http.put(this.url + `product/edit/${productId}`, product);
  }

}
