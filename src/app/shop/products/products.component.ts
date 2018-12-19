import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from './product';
import { CartService } from 'src/app/services/cart.service';
import { UserRestService } from 'src/app/services/user-rest.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  
})
export class ProductsComponent implements OnInit {

@Input() products: product[];

currentUser:any;
isEdit:boolean = true;
currentSeller: any;
product: product[];

constructor(
  private CartService: CartService,
  public userRestService: UserRestService,
  public RoleService: RoleService,
  private productService: ProductService,
  private userService: UserService){ }

  ngOnInit() {

    this.currentUser = this.userService.user('currentUser');
    this.RoleService.Role(this.currentUser.role);

      this.userRestService.getProducts(this.currentUser.role, this.userService.user('currentUser').id)
    .subscribe((result: product[])=> {
        this.products = result.map((p: any) => {
          p['img'] = p.img.split(',');
          p['count']= 0;
          p['seller']= p.seller;
          return p;
          
        });
      },);

      

  //     this.userRestService.getSeller().subscribe((result) => {
  //     this.currentSeller= result;
  //     console.log(this.currentSeller);
  // });
  
}
    
  change(product){
     this.productService.changeFoto(product)
  }

  addProduct(product: product) {
    this.CartService.add(product);
  }

  delete(product){
    let user =  this.userService.user('currentUser');
    this.productService.deleteProduct(product.id, user.id).subscribe(
      (msg) => {
      console.log("deleted");
      window.location.reload();
    });
    
  };

  edit(product){
    this.userService.set('isEdit', this.isEdit);
    this.userService.set('currentProduct', product);
    console.log(product);
  }
 
}
