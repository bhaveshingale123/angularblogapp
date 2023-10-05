import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { AllblogsComponent } from './allblogs/allblogs.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path:"register",
    component:RegisterComponent,
  },
  {
    path:"",
    component:LoginComponent,
  },
  {
    path:"viewblog",component:ViewBlogComponent,children:[
      {
        path:"createblog",
        component:CreateBlogComponent,
      },
      {
        path:"allblogs",
        component:AllblogsComponent,
      },
      {
        path:"myblogs",
        component:MyBlogComponent,
      },
      {
        path:"comment/:id",
        component:CommentComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
