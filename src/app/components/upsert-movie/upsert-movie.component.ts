import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-upsert-movie',
  templateUrl: './upsert-movie.component.html',
  styleUrls: ['./upsert-movie.component.css']
})
export class UpsertMovieComponent {

  isCreate?: boolean;
  movie_id?: number | undefined;
  title?: string;
  published_year?: number;
  movie?: any;
  selectedImage?: any = null;
  posterFile: File  | null = null;

  constructor(private router: Router, private movieService: MovieService, private authService: AuthService) {}

  ngOnInit() {
    if(localStorage.getItem('accessToken') != null) {
      if(this.router.url == '/addmovie') {
        this.isCreate = true;
      }
      else if(this.router.url == '/editmovie') {
        this.isCreate = false;
        this.movie = this.router.lastSuccessfulNavigation?.extras
        this.movie_id = this.movie.id;
        this.title = this.movie.title;
        this.published_year = this.movie.published_year;
        this.selectedImage = this.movie.url;
      }
    }
    else {
      this.router.navigate(['/signin'])
    }
  }

  select_poster(event: any) {
    this.selectedImage = event.target.files[0];
    this.posterFile = event.target.files[0];
    if(this.selectedImage) {
      const reader = new FileReader();
      reader.onload = e => this.selectedImage = reader.result;
      reader.readAsDataURL(this.selectedImage)
    }
  }

  replace() {
    if(this.selectedImage) {
      this.selectedImage = null;
    }
  }

  add_movie() {
    if(this.selectedImage) {
      let new_movie = {title: this.title, published_year: this.published_year}
      this.movieService.createMovie(new_movie, this.posterFile).subscribe((event: any) => {
        console.log('Image uploaded')
        this.router.navigate(['/movielist'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/movielist'])
  }

  update_movie(event: any) {
    if(this.movie_id) {
      let movie = {title: this.title, published_year: this.published_year}
      this.movieService.updateMovie(movie, this.movie_id, this.posterFile).subscribe((event: any) => {
        console.log("Updated data");
      })
      this.router.navigate(['/movielist'])
    }
  }
}
