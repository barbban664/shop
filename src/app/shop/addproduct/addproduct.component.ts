import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';
import { RoleService } from 'src/app/services/role.service';
import { product } from '../products/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  form: FormGroup;
  files: any[] = [];
  images= false;
  currentUser:any;
  productEdit: any;
  isEdit:boolean = false;
  isProduct: product;
  Product: any;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private RoleService: RoleService,
    private userService:UserService){ }

  ngOnInit () {

    this.currentUser = this.userService.user('currentUser');
    this.RoleService.Role(this.currentUser.role);
    this.isEdit = this.userService.user('isEdit');
    console.log(this.isEdit)
    this.isProduct = this.userService.user('currentProduct');

    this.form = this.fb.group({
      producer: [],
      description: [],
      image: [],
      tags:[],
      price: [null, [Validators.required, Validators.pattern("^[0-9]*$"),]],
      name: [null, [Validators.required]],
      userId:[]
    });

    if (this.userService.user('isEdit') != null){

      this.form.get('name').setValue(this.isProduct.name);
      this.form.get('producer').setValue(this.isProduct.producer);
      this.form.get('description').setValue(this.isProduct.description);
      this.form.get('tags').setValue(this.isProduct.tags);
      this.form.get('price').setValue(this.isProduct.price);
    }
   }

  add() {
    
    if (this.userService.user('isEdit') == null){

    console.log(this.Product)

      this.productService.addProduct({
      producer: this.form.value.producer,
      description: this.form.value.description,
      img: this.files,
      tags: [this.form.value.tags],
      price: this.form.value.price,
      name: this.form.value.name,
      userId: this.userService.user('currentUser').id,
    })
      .subscribe (() => {
        this.router.navigate(['../shop']);
      })}
      else {
        this.productService.editProduct(this.isProduct.id, {
          producer: this.form.value.producer,
          description: this.form.value.description,
          tags: [this.form.value.tags],
          price: this.form.value.price,
          name: this.form.value.name,
          userId: this.userService.user('currentUser').id,
        })
        .subscribe (() => {
          this.router.navigate(['../shop']);
        })
      }
      
      
        
       sessionStorage.removeItem('isEdit');
    };

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


    // edit(){
    //     const data = this.form.value;
    //       data['img'] = this.files;
    // this.productService.editProduct(this.form.value, this.productEdit).subscribe(() => {
    //   this.router.navigate(['../shop']);
    // });

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

