import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../model/photo.model';

@Component({
  selector: 'app-gallery-element',
  templateUrl: './gallery-element.component.html',
  styleUrls: ['./gallery-element.component.css']
})
export class GalleryElementComponent implements OnInit {

  @Input()
  photo: PhotoModel;
  showTitle: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log(this.photo.title);
    this.showTitle = false;
  }
}
