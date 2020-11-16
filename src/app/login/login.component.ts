import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from '../service/user.service';
import { User } from '../pojo/User';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isSuccess:boolean = false;
  userName:string;
  password:string;
  user : User;
  errorMessage : Error;
  userSubscriptiion = Subscription;

  ngOnInit() {
  }

  constructor(private loginService: UserService, private router : Router) { }

  onSubmit(userName:string, password:string){
    this.loginService.login(userName, password).
      subscribe((user: User) => {
        this.user = user;
        if(this.user.enabled){
          this.router.navigate(['/welcome']);
        }
      }, 
      (error: Error) => this.errorMessage = error);
    
  }

  ngOnDestroy(){

  }
}
