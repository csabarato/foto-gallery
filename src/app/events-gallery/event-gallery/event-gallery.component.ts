import { Component, OnInit } from '@angular/core';
import {consoleTestResultHandler} from 'tslint/lib/test';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {PhotoService} from '../../service/photo.service';
import {PhotoModel} from '../../model/photo.model';
import {EventTypes} from '../../shared/event.types';
import {GalleryElementComponent} from '../../shared/gallery-element/gallery-element.component';

@Component({
  selector: 'app-event-gallery',
  templateUrl: './event-gallery.component.html',
  styleUrls: ['./event-gallery.component.css']
})
export class EventGalleryComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private photoService: PhotoService) { }

  photos: PhotoModel[];

  ngOnInit(): void {
    this.photos = this.photoService.getPhotosByEventType(this.route.snapshot.params.event);
    console.log(this.photos);
  }
}
