import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { RegistrationComponent } from './registration/registration.component';

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
        component: ProductsComponent,
    },
    {
        path: 'addproduct',
        component: AddproductComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    {
        path: 'registration',
        component: RegistrationComponent,
    }

]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false
})