import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upsert-movie',
  templateUrl: './upsert-movie.component.html',
  styleUrls: ['./upsert-movie.component.css']
})
export class UpsertMovieComponent {
  isCreate?: boolean;
  constructor(private httpClient: HttpClient, private router: Router) {}
  title?: string;
  published_year?: number;
  movie_image?: string;
  movie?: any;
  new_movie?: Movie | undefined;
  ngOnInit() {
    // this.href = this.router.url;
    if(this.router.url == '/addmovie') {
      this.isCreate = true;
    }
    else if(this.router.url == '/editmovie') {
      this.isCreate = false;
      this.movie = this.router.lastSuccessfulNavigation?.extras
      this.title = this.movie.title;
      this.published_year = this.movie.published_year;
    }
  }

  add_movie() {

  }

  cancel() {

  }

  update_movie() {

  }
}
