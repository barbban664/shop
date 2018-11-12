import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router){ }

  ngOnInit () {

    this.form = this.fb.group({
      producer: [],
      description: [],
      image: [],
      tags:[],
      price: [null, [Validators.required]],
      name: [null, [Validators.required]]
    });
   }

  add() {
   this.http.post('http://localhost:8443/api/product/add ', {

    producer: this.form.value.producer,
    description: this.form.value.description,
    img: this.form.value.image,
    tags: [this.form.value.tags],
    price: this.form.value.price,
    name: this.form.value.name
   })
   .subscribe(() =>
    this.router.navigate(['../shop'])
   )};

}
