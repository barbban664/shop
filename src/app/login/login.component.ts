import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalComponent } from '../modal/modal.component';
import { UserRestService } from '../services/user-rest.service';
import { UserService } from '../services/user.service';
import { user } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  modalRef: BsModalRef;
  title = 'Logowanie';
  form: FormGroup;


  constructor(private http: HttpClient,
     private fb: FormBuilder,
     private router: Router,
     private ModalService: BsModalService,
     private userRestService: UserRestService,
     private UserService: UserService) { }

  ngOnInit() {

    this.form = this.fb.group({
      login: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });

  }

  logIn() {

    this.userRestService.login({login: this.form.value.login,
      password: this.form.value.password})
      .subscribe ((result: user) => {
        if (result) {
          this.UserService.set('currentUser', result);
          this.router.navigate(['../shop']);
        }
        console.log(result)
      },
      
        (err) => {
          this.modalRef = this.ModalService.show(ModalComponent);
        }
      );
    }
};
