import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from './product';
import { CartService } from 'src/app/services/cart.service';
import { UserRestService } from 'src/app/services/user-rest.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  
})
export class ProductsComponent implements OnInit {

@Input() products: product[];

currentUser:any;
form: FormGroup;
isEdit:boolean = true;

constructor(
  private CartService: CartService,
  public UserRestService: UserRestService,
  public RoleService: RoleService,
  private UserService: UserService,
  private productService: ProductService,
  private userService: UserService){ }

  ngOnInit() {

    this.currentUser = this.UserService.user('currentUser');
    this.RoleService.Role(this.currentUser.role);

      this.UserRestService.getProducts(this.currentUser.role, this.UserService.user('currentUser').id)
    .subscribe((result: product[])=> {
        this.products = result.map((p: any) => {
          p['img'] = p.img.split(',');
          p['count']= 0;
          return p;
        });
      },);
  }
    
  change(product){
     this.productService.changeFoto(product)
  }

  addProduct(product: product) {
    this.CartService.add(product);
    console.log(product)
  }

  delete(product){
    let user =  this.UserService.user('currentUser');
    this.productService.deleteProduct(product.id, user.id).subscribe(
      (msg) => {
      console.log("deleted");
      window.location.reload();
    });
    
  };

  edit(product){
    this.userService.set('isEdit', this.isEdit);
    this.UserService.set('currentProduct', product);
    console.log(product);
  }
 
}
