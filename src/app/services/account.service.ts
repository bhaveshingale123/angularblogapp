import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private client:HttpClient) { }

  loginUser(model: any) {
    return this.client.post("http://localhost:38281/Account/Login",model);
  }
  registerUser(model: any) {
    return this.client.post("http://localhost:38281/Account/Register",model);
  }
}
