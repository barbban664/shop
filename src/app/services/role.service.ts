import { Injectable } from '@angular/core';

@Injectable()

export class RoleService{

    user: number;

  constructor() {
   }

   Role(role){
      this.user = role;
   }

}
