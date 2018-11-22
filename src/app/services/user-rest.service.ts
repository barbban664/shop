import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
import { Rest } from './rest';


interface LoginData {
  login;
  password;
}

@Injectable(
  //providedIn: 'root' // nie trzeba robic w module
)
export class UserRestService extends Rest {

  constructor(private http: HttpClient) {
    super();
   }

  //login( data: {login, password}){ //interfejs tak lub:
  login( data: LoginData){
    return this.http.post(this.url + 'user/login', data)
   // return this.http.post(`${this.url}user/login`, data)
    }

}
