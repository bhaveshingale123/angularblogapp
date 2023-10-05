import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private client:HttpClient) { }

  createNewBlog(model: any) {
    var token='Bearer '+localStorage.getItem("Token");
    const headers = { 'Authorization': token}
    return this.client.post("http://localhost:38281/api/Blog/CreateNewBlog",model,{headers});
  }

  getMyBlogs(userId:any){
    var token='Bearer '+localStorage.getItem("Token");
    const headers = { 'Authorization': token}
    return this.client.get("http://localhost:38281/api/Blog/GetMyBlogs?userId="+userId,{headers});
  }

  getAllBlogs(){
    var token='Bearer '+localStorage.getItem("Token");
    const headers = { 'Authorization': token}
    return this.client.get("http://localhost:38281/api/Blog/GetAllBlogs",{headers});
  }

  addComment(model: any) {
    var token='Bearer '+localStorage.getItem("Token");
    const headers = { 'Authorization': token}
    return this.client.post("http://localhost:38281/api/Blog/AddComment",model,{headers});
  }

  getAllComments(blogId:any){
    var token='Bearer '+localStorage.getItem("Token");
    const headers = { 'Authorization': token}
    return this.client.get("http://localhost:38281/api/Blog/GetAllComments?blogId="+blogId,{headers});
  }
  getBlogById(blogId:any){
    var token='Bearer '+localStorage.getItem("Token");
    const headers = { 'Authorization': token}
    return this.client.get("http://localhost:38281/api/Blog/GetBlogById?blogId="+blogId,{headers});
  }
}
