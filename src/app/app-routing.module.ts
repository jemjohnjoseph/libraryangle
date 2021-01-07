import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import{ SigninComponent } from './signin/signin.component';
import{ SignupComponent } from './signup/signup.component';
import{ BooksComponent } from './books/books.component';
import{ AuthorsComponent } from './authors/authors.component'
const routes: Routes = [
  {path: '',component: SigninComponent },
  {path: 'signup',component: SignupComponent },
  {path: 'books',component: BooksComponent },
  {path: 'authors',component: AuthorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
