import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }


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

}