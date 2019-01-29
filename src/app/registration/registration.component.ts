import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRestService } from '../services/user-rest.service';
import { UserService } from '../services/user.service';
import { user } from '../user';

interface Role {
  id;
  name;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  form: FormGroup;
  roles: Role[];
  id: any;
  isEditUser: boolean = false;
  isUser: user;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userRestService: UserRestService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.isEditUser = this.userService.user('isEditUser');
    this.userRestService.getRole()
      .subscribe((result: Role[]) => {
        this.roles = result
      });
      this.id = this.route.snapshot.paramMap.get('id');
      this.isUser = this.userService.user('currentUser');
      console.log(this.userService.user('isEditUser'));
      console.log(this.userService.user('isAddUser'));


    this.form = this.fb.group({

      login: [],
      name: [],
      lastName: [],
      password: [],
      password_confirm: [],
      role: [],

    });

    if (this.userService.user('isEditUser') != null) {
      console.debug(this.form)
      console.debug('key', Object.keys(this.form.controls))
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key).setValue(this.isUser[key]);
      })
    }
  }

  add() {

    if (this.userService.user('isEditUser') == null) {

      this.userRestService.registration({
        login: this.form.value.login,
        name: this.form.value.name,
        lastName: this.form.value.lastName,
        password: this.form.value.password,
        role: this.form.value.role
      })
        .subscribe(() =>{
          console.log(this.userService.user('isAddUser'));
          if (this.userService.user('isAddUser') == null){
            this.router.navigate(['../login'])
            
        }
        else {
          this.router.navigate(['admin/main/users'])
        }
        });
    }
    else {
      this.userService.editUser(this.id, {
        login: this.form.value.login,
        name: this.form.value.name,
        lastName: this.form.value.lastName,
        role: this.form.value.role,
        userId: this.userService.user('currentUser').id,
      })
        .subscribe(() => {
          this.router.navigate(['admin/main/users']);
      })
  }
  // sessionStorage.removeItem('isEditUser');
  // sessionStorage.removeItem('isAddUser');
};
  
};

