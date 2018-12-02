import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(
    private router: Router,
    private UserService: UserService) {
  }

  currentUser:any;

  ngOnInit() {
   
    this.currentUser = this.UserService.user('currentUser');
  }

  logout() {
    this.UserService.clear();
    this.router.navigate(['/login']);
  }

  // onClicked($event) {
  //   this.counts = $event;
  // }
}

