import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRestService } from '../services/user-rest.service';
import { UserService } from '../services/user.service';
import { user } from '../user';
import { ModalService } from '../services/modal.service';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Logowanie';
  form: FormGroup;
  currentUser: any;
  role: any;

  constructor(
     private fb: FormBuilder,
     private router: Router,
     private userRestService: UserRestService,
     private userService: UserService,
     private ModalService: ModalService,
     private roleService: RoleService) { }

  ngOnInit() {

    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });

  }

  logIn() {
    
    this.userRestService.login({login: this.form.value.login,
      password: this.form.value.password})
      .subscribe ((result: user) => {
        if (result) {
          this.userService.set('currentUser', result);
          this.roleService.Role(result.role)
          if (this.roleService.user == 1) {
            this.router.navigate(['../admin']);
          } else {
            this.router.navigate(['../shop']);
          }
        }
      },
      
        (err) => {
          this.ModalService.openModal('Niepoprawny login lub hasło');
        }
      );
    }
};
