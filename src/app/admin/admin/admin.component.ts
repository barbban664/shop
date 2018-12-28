import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
    public userService: UserService
  ) { }

  currentUser: any;

  ngOnInit() {
    this.currentUser = this.userService.user('currentUser');

  }

  logout() {
    this.userService.clear();
    this.router.navigate(['/login']);
  }

}
