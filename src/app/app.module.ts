import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRouting } from './app.routing';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    MainComponent,
    AddproductComponent,
    CartComponent,
    RegistrationComponent,
    ModalComponent

  ],
  imports: [
    HttpClientModule,
    RouterModule,
    AppRouting,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [ModalComponent]
})
export class AppModule { }
