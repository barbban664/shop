import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private userRestService: AddProductService){ }

  ngOnInit () {

    this.form = this.fb.group({
      producer: [],
      description: [],
      image: [null, [Validators.required]],
      tags:[],
      price: [null, [Validators.required, Validators.pattern("^[0-9]*$"),]],
      name: [null, [Validators.required]]
    });
   }

  add() {

    this.userRestService.addProduct({
      producer: this.form.value.producer,
      description: this.form.value.description,
      img: this.form.value.image,
      tags: [this.form.value.tags],
      price: this.form.value.price,
      name: this.form.value.name})
      .subscribe (() => 
        this.router.navigate(['../shop']),

   )};

// this.http.post('http://localhost:8443/api/product/add ', {

//     producer: this.form.value.producer,
//     description: this.form.value.description,
//     img: this.form.value.image,
//     tags: [this.form.value.tags],
//     price: this.form.value.price,
//     name: this.form.value.name
//    })
//    .subscribe(() =>
//     this.router.navigate(['../shop'])
}
