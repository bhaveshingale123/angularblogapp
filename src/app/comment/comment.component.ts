import { Component } from '@angular/core';
import { Comment } from '../models/comment';
import { BlogService } from '../services/blog.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  constructor(private service: BlogService, private route: Router,private rout:ActivatedRoute) {
  }
  commentModel: Comment = new Comment();
  allComments: any;
  blogDetail: any;
  BlogId?:Number;
  commentboxText:string='';
  ngOnInit() {
    this.BlogId=Number(this.rout.snapshot.paramMap.get('id'))
    this.getBlogById(this.BlogId);
    this.getAllComments(this.BlogId);
  }

  addComment(model: any) {
    var user = localStorage.getItem("UserId")?.toString();
    this.commentModel.CommentText = model.commentText;
    this.commentModel.CommentedBy = user;
    this.commentModel.BlogId = this.BlogId;
    this.service.addComment(this.commentModel).subscribe(res => {
      this.commentboxText="";
      this.getAllComments(this.BlogId);
    })
    //this.BlogId=Number(this.rout.snapshot.paramMap.get('id'))
  }
  getAllComments(blogId: any) {
    this.service.getAllComments(blogId).subscribe(res => {
      this.allComments = res;
    })
  }

  getBlogById(blogId: any){
    this.service.getBlogById(blogId).subscribe(p => {
      this.blogDetail = p;
    })
  }
}
