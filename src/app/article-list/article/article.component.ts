import {Component, Input, OnInit} from '@angular/core';
import {ArticleModel} from '../../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  isImageShown = false;
  imagePanelTitleText: string;

  constructor() { }

  @Input() article: ArticleModel;

  ngOnInit(): void {
    this.imagePanelTitleText = 'Show picture';
  }

  onShowPictureClick() {
    if (this.isImageShown) {
      this.imagePanelTitleText = 'Show picture';
      this.isImageShown = false;
    } else if (!this.isImageShown) {
      this.imagePanelTitleText = 'Hide picture';
      this.isImageShown = true;
    }
  }
}
