import { Component, OnInit } from '@angular/core';
import { UserRestService } from 'src/app/services/user-rest.service';
import { user } from 'src/app/user';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: user[];
  isEditUser: boolean = true;
  isAddUser: boolean = true;

  constructor(private userRestService: UserRestService,
              private userService: UserService,
              private cartService: CartService) { }

  ngOnInit() {
    this.userRestService.getAllUsers()
    .subscribe((result: user[])=> { 
         this.users = result
        });

  }

  deleteUser(user) {
    this.userRestService.deleteUser(user.id).subscribe(
      (msg) => {
        console.log("deleted");
        this.userRestService.getAllUsers()
      .subscribe((result: user[]) => {
        this.users = result
         console.log(this.users)
      });
      });
  };

  add() {
    this.userService.set('isAddUser', this.isAddUser);
    console.log(this.isAddUser);
  }

  edit(user) {
    this.userService.set('isEditUser', this.isEditUser);
    this.userService.set('currentUser', user);
    console.log(this.isEditUser);
  }

}
