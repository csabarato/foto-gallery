import {EventTypes} from '../shared/event.types';

export interface PhotoModel {

  id: number;
  title: string;
  imageSrc: string;
  date: Date;
  eventType: EventTypes;

}
