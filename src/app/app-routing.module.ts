import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {DatesGalleryComponent} from './dates-gallery/dates-gallery.component';
import {EventsGalleryComponent} from './events-gallery/events-gallery.component';
import {EventGalleryComponent} from './events-gallery/event-gallery/event-gallery.component';
import {PhotoPageComponent} from './photo-page/photo-page.component';


const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'photosByDates',  component: DatesGalleryComponent },
  { path: 'photosByEvents', component: EventsGalleryComponent },
  { path: 'photosByEvents/:event', component: EventGalleryComponent },
  { path: 'photosByEvents/:event/:id', component: PhotoPageComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'articles', component: ArticleListComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
