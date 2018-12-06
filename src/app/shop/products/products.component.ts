import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from './product';
import { CartService } from 'src/app/services/cart.service';
import { UserRestService } from 'src/app/services/user-rest.service';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  
})
export class ProductsComponent implements OnInit {

@Input() products: product[];
// @Input() role: number;
currentUser:any;

constructor(
  private CartService: CartService,
  public UserRestService: UserRestService,
  public RoleService: RoleService,
  private UserService: UserService,
  private ImageService: ImageService){ }

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
    
    // console.log(this.UserService.user('currentUser').id)
  }
    
  change(product){
     this.ImageService.changeFoto(product)
     }

  addProduct(product: product) {
    this.CartService.add(product);
    console.log(product)
  }
 
}
