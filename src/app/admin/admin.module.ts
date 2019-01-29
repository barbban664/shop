import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';
import { AdminComponent } from './admin/admin.component';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { UsersComponent } from './admin/users/users.component';
import { UserModule } from '../modules/user.module';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting,
    UserModule
  ],
  declarations: [AdminComponent, 
    HomePageComponent, 
    UsersComponent],

    providers: [UserService]
})
export class AdminModule { }
