import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { catchError } from 'rxjs';
import { error } from 'jquery';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent {
  myBlogs:any;
  constructor(private services: BlogService) {
  }
  ngOnInit() {
    this.getAllBlogs();
  }
  getAllBlogs() {
    this.services.getAllBlogs().pipe(
    ).subscribe(res => {
      this.myBlogs=res;
      console.log(JSON.stringify(res));
    })
  }
}
