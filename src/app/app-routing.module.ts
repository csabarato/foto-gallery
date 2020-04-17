import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {ContactComponent} from './contact/contact.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleComponent} from './article-list/article/article.component';


const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'photos',  component: PhotoListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'articles', component: ArticleListComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
