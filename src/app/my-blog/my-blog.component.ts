import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service'

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent {
  myBlogs:any;
  constructor(private services: BlogService) {
  }
  ngOnInit() {
    this.getMyBlogs();
  }
  getMyBlogs() {
    debugger;
    var userId=localStorage.getItem("UserId")
    this.services.getMyBlogs(userId).subscribe(res => {
      this.myBlogs=res;
    })
  }
}
