import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './shop/products/products.component';
import { AddproductComponent } from './shop/addproduct/addproduct.component';
import { CartComponent } from './shop/cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'shop',
        component: ShopComponent,
        children: [
          {
            path: '',
            component: ProductsComponent,
          },
          {
            path: 'addproduct',
            component: AddproductComponent,
          },
          {
          path: 'edit/:productId',
          component: AddproductComponent,
        },
          {
            path: 'cart',
            component: CartComponent,
          },
        ]},
    {
        path: 'registration',
        component: RegistrationComponent,
    }

]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false
})