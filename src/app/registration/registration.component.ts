import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { role } from './role';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  roles: role[]; 

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {

      this.http.get('http://localhost:8443/api/user/roles').subscribe(
      (result: role[])=> {
        this.roles = result.map((p: any) => {
          return p;
        });
      },
    );


    this.form = this.fb.group({
      name:[],
      lastName:[],
      login:[],
      password:[],
      confirmPassword:[],
      role:[],

    });
  }

  // add() {
  //   this.http.post('http://localhost:8443/api/user/add ', {

  //     name: this.form.value.name,
  //     lastName: this.form.value.lastName,
  //     login: this.form.value.login,
  //     password: this.form.value.password,
  //     role: this.form.value.role
  //   })
  //     .subscribe(() =>
  //       this.router.navigate(['../login'])

  //       // (err) => {
  //       //   console.error(err);
  //       // }
  //     );
  // };

}
