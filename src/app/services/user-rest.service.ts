import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rest } from './rest';
import { UserService } from './user.service';
import { Subject } from 'rxjs';


interface LoginData {
  login;
  password;
}

interface RegistrationData {
      login;
      name;
      lastName;
      password;
      role;
}

@Injectable(
  //providedIn: 'root' // nie trzeba robic w module
)
export class UserRestService extends Rest {

  public sellerLogin= new Subject<any>();
  currentSeller: any;


  constructor(private http: HttpClient,
    private userService: UserService) {
    super();
   }

  //login( data: {login, password}){ //interfejs tak lub:
  login( data: LoginData){
    return this.http.post(this.url + 'user/login', data)
   // return this.http.post(`${this.url}user/login`, data)
    }

    registration(reg: RegistrationData){
      return this.http.post(this.url + 'user/add', reg);
    }

    getRole(){
      return this.http.get(this.url + 'user/roles');
    }

    getProducts(role, userId){
      if (role==1 || role==2){
        return this.http.get(this.url + 'product/list');
      }
      else if (role==3){
        return this.http.get(this.url + 'product/list/' + userId);
      }
    }

    getAllUsers(){
      return this.http.get(this.url + 'user/all');
    }

    deleteUser(userId){
      return this.http.delete(this.url + 'user/delete/' + userId);
    }
}
