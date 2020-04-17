import {Injectable} from '@angular/core';
import {ArticleModel} from '../model/article.model';

@Injectable()
export class ArticleService {

   mountaneeringArticle: ArticleModel = {
    title: 'Mountaineering at the Himalayas',
    text: 'This is a picture, which I shot when I reached the Mt. Everest peak without oxygen support.',
     date: null,
     imageSrc: 'assets/sea.jpg'
  };

  cyclingArticle: ArticleModel = {
    title: 'Cycling',
    text: 'asd lol qwe',
    date: null,
    imageSrc: 'assets/sky.jpg'
  };

  articles: ArticleModel[] = [this.mountaneeringArticle, this.cyclingArticle];

  listArticles() {
    console.log(this.articles)
    return this.articles;

  }
}
