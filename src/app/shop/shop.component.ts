import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

    counts: number = 0;

  constructor( ) {
     
  }

  ngOnInit() {
   
  }

  // onClicked($event) {
  //   this.counts = $event;
  // }
}

