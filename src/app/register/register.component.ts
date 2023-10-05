import { Component } from '@angular/core';
import {AccountService} from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private accountService:AccountService,private route:Router) 
  {
  }

  registerUser(model:any){
    this.accountService.registerUser(model).subscribe(res=>{
      this.route.navigate([""]);
    });
  }
}
