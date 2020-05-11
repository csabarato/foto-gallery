import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {PhotoService} from '../../service/photo.service';
import {PhotoModel} from '../../model/photo.model';

@Component({
  selector: 'app-category-gallery',
  templateUrl: './gallery-grid-list.component.html',
  styleUrls: ['./gallery-grid-list.component.css']
})
export class GalleryGridListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private photoService: PhotoService) { }

  photos: PhotoModel[];

  ngOnInit(): void {
    this.photos = this.photoService.getPhotosByCategory(this.route.snapshot.params.event);
    console.log(this.photos);
  }
}
