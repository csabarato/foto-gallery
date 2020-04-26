import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../service/photo.service';
import {PhotoModel} from '../model/photo.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {

  photo: PhotoModel;

  constructor(private router: Router, private route: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photo = this.photoService.getPhotoById(this.route.snapshot.params.id);
  }

}
