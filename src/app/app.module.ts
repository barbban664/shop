import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './shop/products/products.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRouting } from './app.routing';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddproductComponent } from './shop/addproduct/addproduct.component';
import { CartComponent } from './shop/cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { UserRestService } from './services/user-rest.service';
import { ShopComponent } from './shop/shop.component';
import { AddProductService } from './services/add-product.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';
import { InterceptorService } from './services/interceptor.service';
import { ModalService } from './services/modal.service';
import { RoleService } from './services/role.service';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    AddproductComponent,
    CartComponent,
    RegistrationComponent,
    ModalComponent,
    ShopComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    AppRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BrowserModule,
	  StorageServiceModule
  ],
  
  providers: [UserRestService,
  AddProductService,
  UserService,
  ModalService,
  CartService,
  RoleService,
  ImageService,{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],

  bootstrap: [AppComponent],

  entryComponents: [ModalComponent]
})
export class AppModule { }
