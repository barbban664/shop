import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

    counts: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  onClicked($event) {
    this.counts = $event;
  }
}

