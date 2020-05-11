import {CategoriesEnum} from '../shared/categoriesEnum';

export interface PhotoModel {

  id: number;
  title: string;
  imageSrc: string;
  date: Date;
  category: CategoriesEnum;

}
