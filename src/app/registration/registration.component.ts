import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserRestService } from '../services/user-rest.service';

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


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userRestService: UserRestService) { }

  ngOnInit() {

    
      this.userRestService.getRole()
        .subscribe((result: Role[])=> { 
             this.roles = result
            });


    this.form = this.fb.group({

      login:[],
      name:[],
      lastName:[],
      password:[],
      password_confirm: [],
      role:[],

    });
  }

  add() {

    this.userRestService.registration({login: this.form.value.login,
      name: this.form.value.name,
      lastName: this.form.value.lastName,
      password: this.form.value.password,
      role: this.form.value.role})
      .subscribe(() =>
      this.router.navigate(['../login'])
    );
  };
  
};
  
