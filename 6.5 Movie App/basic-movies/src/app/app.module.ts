import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/components/list-movies/list-movies.component';
import { MainPagesComponent } from './movies/pages/main-pages/main-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MainPagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
