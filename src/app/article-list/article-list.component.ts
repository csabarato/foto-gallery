import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../service/article.service';
import {ArticleModel} from '../model/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: ArticleModel[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.listArticles();
    console.log("asdadsa");
  }

}
