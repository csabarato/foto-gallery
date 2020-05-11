import {Injectable} from '@angular/core';
import {PhotoModel} from '../model/photo.model';
import {CategoriesEnum} from '../shared/categoriesEnum';
import {typeIsOrHasBaseType} from 'tslint/lib/language/typeUtils';


@Injectable({
    providedIn: 'root'
})
export class PhotoService {

  photo1: PhotoModel = {
  id: 1,
  title: 'Mountaineering at the Himalayas',
  imageSrc: 'assets/himalaya.jpg',
  date: new Date(2020, 1, 1),
  category: CategoriesEnum.mountaineering
  };

  photo2: PhotoModel = {
    id: 2,
    title: 'Cycling',
    imageSrc: 'assets/cycling.jpg',
    date: new Date(2020, 2, 1),
    category: CategoriesEnum.cycling
  };

  photo3: PhotoModel = {
    id: 3,
    title: 'Sea',
    imageSrc: 'assets/sea.jpg',
    date: new Date(2020, 2, 1),
    category: CategoriesEnum.holiday
  };

  photo4: PhotoModel = {
    id: 4,
    title: 'Sky',
    imageSrc: 'assets/sky.jpg',
    date: new Date(2020, 2, 1),
    category: CategoriesEnum.holiday
  };

  beach: PhotoModel = {
    id: 5,
    title: 'Palm Beach',
    imageSrc: 'assets/beach.png',
    date: new Date(2020, 2, 1),
    category: CategoriesEnum.holiday
  };

  budva: PhotoModel = {
    id: 6,
    title: 'Landscape of Budva',
    imageSrc: 'assets/budva.jpg',
    date: new Date(2020, 2, 1),
    category: CategoriesEnum.holiday
  };


  photos: PhotoModel[] = [this.photo1, this.photo2, this.photo3, this.photo4, this.beach, this.budva];

  getPhotosByCategory(category: string) {
    return this.photos.filter(i => i.category === category);
  }

  getPhotoById(id: number) {
    return this.photos.find(i => i.id === +id);
  }

  filterPicturesByDate(fromDate: Date, toDate: Date) {
    return this.photos.filter(i => i.date.getTime() > fromDate.getTime()).filter(i => i.date.getTime() < toDate.getTime());
  }
}
