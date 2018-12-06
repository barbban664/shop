import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable()

export class InterceptorService implements HttpInterceptor {

    constructor(private UserService: UserService){

    }

    intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>>{
        const user= this.UserService.user('currentUser');
        const headers= new HttpHeaders({'user-session': user ? user.userSession: ''});

        const clone= request.clone({headers});
        return handler.handle(clone)


    }

}
