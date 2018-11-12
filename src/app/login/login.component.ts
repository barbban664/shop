import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title= 'Logowanie';
  login: string;
  password: string;
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });

  }

  logIn() {
    this.router.navigate(['../shop'])
    this.form.reset();
  }

}
