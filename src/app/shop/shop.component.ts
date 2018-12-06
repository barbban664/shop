import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {

  constructor(
    private router: Router,
    public UserService: UserService,
    private CartService: CartService,
    public RoleService: RoleService) {
  }

  currentUser:any;

  ngOnInit() {
   
    this.currentUser = this.UserService.user('currentUser');
    this.RoleService.Role(this.currentUser.role);
    // console.log(this.RoleService.user)
    
  }

  logout() {
    this.UserService.clear();
    this.router.navigate(['/login']);
  }

  get productsCart() {
    return this.CartService.productsCart;
  }

}

