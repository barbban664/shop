import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouting } from './admin.routing';
import { AdminComponent } from './admin/admin.component';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { UsersComponent } from './admin/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [AdminComponent, HomePageComponent, UsersComponent]
})
export class AdminModule { }
