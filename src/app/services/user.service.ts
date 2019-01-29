import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rest } from './rest';

@Injectable()
export class UserService extends Rest {

  url: any;

  constructor(private http: HttpClient) { super(); }


  set (key: string, user: any){
    sessionStorage.setItem(key, JSON.stringify(user));
  }

  user(data) {
    let user= sessionStorage.getItem(data);
    return JSON.parse(user)
  }
      
  clear(){
    sessionStorage.clear()
  }

  editUser( Id: number, user){
    console.log('edycja')
    user['id'] = Id;
    return this.http.put(this.url + `user/edit/`, user);
  }

}