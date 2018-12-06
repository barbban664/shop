import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rest } from './rest';


interface addProductData {
  producer;
  description;
  img;
  tags;
  price;
  name;
  userId;
}

@Injectable(
)
export class AddProductService extends Rest {

  constructor(private http: HttpClient) {
    super();
   }

  addProduct( data: addProductData){
    return this.http.post(this.url + 'product/add', data)
    }
}
