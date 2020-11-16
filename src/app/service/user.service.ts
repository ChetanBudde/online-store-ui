import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http'
import {Observable} from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';

import {User} from '../pojo/User';

@Injectable()
export class UserService implements OnInit {
    loginUrl : string = 'http://localhost:9000/online-store/login';
    signUpUrl : string = 'http://localhost:9000/online-store/signup';
    user:User;
    constructor(private http:HttpClient){

    }
    ngOnInit(){

    }

    login(userName:string, password:string) : Observable<User>{
        return this.http.get<User>(this.loginUrl+'?userName='+userName+'&password='+password).pipe(
            map(data=>{
                return this.user= data;
            }),
            catchError(this.handleError));
    }

    // private handleError(error:any){
    //     let errMsg = error.message ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
    //     console.log(errMsg);
    //     return Observable.throw(errMsg);
    // }

    private handleError(err:HttpErrorResponse){
        let errMsg = '';
        if(err.error instanceof Error){
            console.log("An error has occured"+err.error.message);
            errMsg = err.error.message;
        }else{
            console.log("Backend has returned error code "+ err.status);
            errMsg= err.error.status;
        }
        return Observable.throw(errMsg);
    }

    signUp(user : User) : Observable<User>{
        return this.http.post<User>(this.signUpUrl, user).pipe(tap(data=> console.log("All : "+data)), catchError(this.handleError));
    }
}