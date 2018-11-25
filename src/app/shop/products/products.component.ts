import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from './product';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

@Input() products: product[];

// count = 0; 
// @Output() counter: EventEmitter<any> = new EventEmitter<any>();

constructor(private http: HttpClient){ }
// products: product[];


//   constructor(private fb: FormBuilder) { 
//     this.products = [
//       new product('https://halandmiau.pl/pol_pl_DINGO-OBROZA-Z-DZWONKIEM-DLA-KOTA-AMERICA-ALABAMA-1-0-X-29-CM-834_4.jpg', 'Obroża dla kota', 'Super', 10),
//       new product('https://9.allegroimg.com/original/0cdc9a/e16f06ca4639b0c7bf5ac51ee309','Zabawka dla kota', 'Duża ryba', 15),
//       new product('https://3.allegroimg.com/s400/0677c0/eb42f49b4937a5e4271fa5e77ec3','Duży drapak dla kota', 'Świetny', 180),
//     ];
//   }

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

  // addProduct(){
  //   this.count ++;
  //   this.counter.emit(this.count);
  // }
 
}
