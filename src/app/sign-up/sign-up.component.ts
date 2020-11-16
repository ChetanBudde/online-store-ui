import {Component} from '@angular/core';
import { User } from '../pojo/User';
import {  } from 'rxjs';

@Component({
    selector : 'app-sign-up',
    templateUrl : './sign-up.component.html',
    styleUrls : ['./sign-up.component.css']
})
export class SignUpComponent{
    user:User;
    
    onSubmit(firstName:string, lastName:string, email:string, password:string): User{
        this.user= new User();
        return new User();
    }

}  