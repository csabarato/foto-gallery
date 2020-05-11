import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {DatesGalleryComponent} from './dates-gallery/dates-gallery.component';
import {CategoriesGalleryComponent} from './categories-gallery/categories-gallery.component';
import {GalleryGridListComponent} from './shared/gallery-grid-list/gallery-grid-list.component';
import {PhotoPageComponent} from './photo-page/photo-page.component';
import {UploadPhotosComponent} from './upload-photos/upload-photos.component';


const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'dates',  component: DatesGalleryComponent },
  { path: 'categories', component: CategoriesGalleryComponent },
  { path: 'categories/:event', component: GalleryGridListComponent },
  { path: 'image/:id', component: PhotoPageComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'articles', component: ArticleListComponent},
  { path: 'uploadPhotos', component: UploadPhotosComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
