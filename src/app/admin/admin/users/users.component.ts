import { Component, OnInit } from '@angular/core';
import { UserRestService } from 'src/app/services/user-rest.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: user[];

  constructor(private userRestService: UserRestService) { }

  ngOnInit() {
    this.userRestService.getAllUsers()
    .subscribe((result: user[])=> { 
         this.users = result
         console.log(this.users)
        });

        


  }

}
