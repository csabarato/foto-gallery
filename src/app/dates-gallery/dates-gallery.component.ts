import { Component, OnInit } from '@angular/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {FormControl, NgModel} from '@angular/forms';
import {PhotoService} from '../service/photo.service';
import {PhotoModel} from '../model/photo.model';

@Component({
  selector: 'app-dates-gallery',
  templateUrl: './dates-gallery.component.html',
  styleUrls: ['./dates-gallery.component.css']
})
export class DatesGalleryComponent implements OnInit {

  constructor(private photoService: PhotoService) {}

  fromDate = new FormControl(new Date());
  toDate = new FormControl(new Date());

  photos: PhotoModel[] = [];

  ngOnInit(): void {}


  filterPicturesByDate() {
    console.log(this.fromDate.value);
    this.photos = this.photoService.filterPicturesByDate(this.fromDate.value, this.toDate.value);
    console.log(this.photos);
  }
}
