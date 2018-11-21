import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Logowanie';
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });

  }

  logIn() {
    this.http.post('http://localhost:8443/api/user/login', {

      login: this.form.value.login,
      password: this.form.value.password
    })
      .subscribe(() =>
        this.router.navigate(['../shop'])
      );
  };

}
