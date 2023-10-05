import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent {
  firstName?:string='';
  constructor(public route: Router){
  }
 ngOnInit(){
  debugger;
    this.firstName=localStorage.getItem("FirstName")?.toString();
    this.route.navigate(["/viewblog/allblogs"]);
 }
}
