import {Component, Input, OnInit} from '@angular/core';
import {ArticleModel} from '../../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  @Input() article: ArticleModel;

  ngOnInit(): void {
  }

}
