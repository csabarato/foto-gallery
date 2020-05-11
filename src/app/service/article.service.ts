import {Injectable} from '@angular/core';
import {ArticleModel} from '../model/article.model';

@Injectable()
export class ArticleService {

   mountaneeringArticle: ArticleModel = {
     title: 'Mountaineering at the Himalayas',
     text: 'This is a picture, which I shot when I reached the Mt. Everest peak without oxygen support.',
     imageSrc: 'assets/himalaya.jpg',
     date: new Date(2018, 6, 10)
  };

  cyclingArticle: ArticleModel = {
    title: 'Beach vibes',
    text: 'asd lol qwe',
    imageSrc: 'assets/sea.jpg',
    date: new Date(2019, 7, 11)
  };

  articles: ArticleModel[] = [this.mountaneeringArticle, this.cyclingArticle];

  listArticles() {
    return this.articles;
  }
}
