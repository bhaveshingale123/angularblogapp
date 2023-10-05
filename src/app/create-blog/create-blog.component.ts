import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {
  file: any;
  myBlogs:any
  uid:any;
  constructor(private service: BlogService,private route:Router) {
  }

  ngOnInit() {
    this.getMyBlogs();
  }
  onchange(event: any) {
    debugger;
    this.file = event.target.files[0]
  }
  postNewBlog(model: any) {
    this.uid=localStorage.getItem('UserId')
    const formdata: FormData = new FormData();
    formdata.append("Title", model.Title)
    formdata.append("Description", model.Description)
    formdata.append("Img", this.file)
    formdata.append("CreatedBy",this.uid)
    this.service.createNewBlog(formdata).subscribe(res => {
     
    })
    this.route.navigateByUrl('/viewblog/allblogs', { skipLocationChange: true }).then(() => {
      this.getMyBlogs();
      this.route.navigate(['/viewblog/createblog']);
      alert("Blog Created !!!!!");
   });
    //this.route.navigate(["/viewblog/createblog"]);
  }

  getMyBlogs() {
    var userid=localStorage.getItem("UserId")
    this.service.getMyBlogs(userid).subscribe(myBlogs => {
      console.warn(myBlogs);
      this.myBlogs=myBlogs
    });
  }

}
