import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article-list/article/article.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ArticleService} from './service/article.service';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { DatesGalleryComponent } from './dates-gallery/dates-gallery.component';
import { CategoriesGalleryComponent } from './categories-gallery/categories-gallery.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { GalleryGridListComponent } from './shared/gallery-grid-list/gallery-grid-list.component';
import { GalleryElementComponent } from './shared/gallery-grid-list/gallery-element/gallery-element.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { UploadPhotosComponent } from './upload-photos/upload-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    ContactComponent,
    DatesGalleryComponent,
    CategoriesGalleryComponent,
    GalleryGridListComponent,
    GalleryElementComponent,
    PhotoPageComponent,
    UploadPhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule

  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
