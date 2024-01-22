import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { UpsertMovieComponent } from './components/upsert-movie/upsert-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MovieListComponent,
    UpsertMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
