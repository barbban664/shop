import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AddProductService } from 'src/app/services/add-product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  form: FormGroup;
  files: any[] = [];
  images= false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private AddproductService: AddProductService,
    private UserService: UserService){ }

  ngOnInit () {

    this.form = this.fb.group({
      producer: [],
      description: [],
      image: [],
      tags:[],
      price: [null, [Validators.required, Validators.pattern("^[0-9]*$"),]],
      name: [null, [Validators.required]],
      userId:[]
    });
   }

  add() {

    console.log(this.UserService.user('currentUser'))
    this.AddproductService.addProduct({
      producer: this.form.value.producer,
      description: this.form.value.description,
      img: this.files,
      tags: [this.form.value.tags],
      price: this.form.value.price,
      name: this.form.value.name,
      userId: this.UserService.user('currentUser').id})
      .subscribe (() => 
        this.router.navigate(['../shop']),

   )};

   onFileChange(event){
     this.files= [];
     this.images= false;
     const files= event.target.files;

     let num=0;
     
     for(let i=0; i<files.length; i++){
       const file= files[i];

       const reader= new FileReader();
       reader.addEventListener('loadend',(e: any)=>{
         console.debug('Koniec', e);

         const d={};

         d['result'] = e.target.result.toString().split(',')[1];
         d['name']= file.name;
         this.files.push(d);
         num +=1;
         this.images= num >=files.length;
         console.debug('Files', this.files);
       });

       reader.readAsDataURL(file)
     }

    


   }

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
