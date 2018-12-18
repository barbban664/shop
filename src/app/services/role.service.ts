import { Injectable } from '@angular/core';

@Injectable()

export class RoleService{

    user: number;

  constructor() {
   }

   Role(role){
       if (role == 1) {
           this.user = 1;
        } else if (role == 2) {
           this.user = 2;
        } else if (role == 3) {
           this.user = 3;
        }
   }

}
