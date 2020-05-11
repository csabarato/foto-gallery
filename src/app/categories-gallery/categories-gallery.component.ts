import { Component, OnInit } from '@angular/core';
import {CategoriesEnum} from '../shared/categoriesEnum';

@Component({
  selector: 'app-categories-gallery',
  templateUrl: './categories-gallery.component.html',
  styleUrls: ['./categories-gallery.component.css']
})
export class CategoriesGalleryComponent implements OnInit {

  categories: string[] = [];

  icons = {
      holiday: 'wb_sunny',
      cycling: 'directions_bike',
      mountaineering: 'near_me'
  };

  constructor() {}

  ngOnInit(): void {
    for (const item in CategoriesEnum) {
      if (typeof item === 'string') {
        this.categories.push(item);
      }
    }
  }

}
