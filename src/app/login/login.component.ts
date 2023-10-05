import { Component } from '@angular/core';
import { AccountService } from '../services/account.service'
import {Router} from '@angular/router'
import { Userdetail } from '../models/userdetail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model?:Userdetail
  unAuthorized?:boolean
  constructor(private accountservice: AccountService,private route:Router) {
  }

  userLogin(model: any) {
    this.accountservice.loginUser(model).subscribe(res => {
      debugger;
      model=res;
      if(model!=null){
        localStorage.setItem("Token",model.token);
        localStorage.setItem("UserId",model.userId);
        localStorage.setItem("FirstName",model.firstName);
        this.route.navigate(["/viewblog/allblogs"]);
      }
      else{
        this.unAuthorized=true;
      }
    })
  }
}
