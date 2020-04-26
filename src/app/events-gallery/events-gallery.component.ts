import { Component, OnInit } from '@angular/core';
import {EventTypes} from '../shared/event.types';

@Component({
  selector: 'app-events-gallery',
  templateUrl: './events-gallery.component.html',
  styleUrls: ['./events-gallery.component.css']
})
export class EventsGalleryComponent implements OnInit {

  eventTypes: string[] = [];

  constructor() { }

  ngOnInit(): void {

    for (const item in EventTypes) {
      if (typeof item === 'string') {
        this.eventTypes.push(item);
      }
    }
  }

}
