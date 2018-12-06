import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRestService } from '../services/user-rest.service';
import { UserService } from '../services/user.service';
import { user } from '../user';
import { ModalService } from '../services/modal.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Logowanie';
  form: FormGroup;


  constructor(
     private fb: FormBuilder,
     private router: Router,
     private userRestService: UserRestService,
     private UserService: UserService,
     private ModalService: ModalService) { }

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
          this.UserService.set('currentUser', result);
          this.router.navigate(['../shop']);
        }
      },
      
        (err) => {
          this.ModalService.openModal('Niepoprawny login lub hasło');
        }
      );
    }
};
