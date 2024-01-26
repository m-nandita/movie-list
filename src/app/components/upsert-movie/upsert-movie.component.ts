import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-upsert-movie',
  templateUrl: './upsert-movie.component.html',
  styleUrls: ['./upsert-movie.component.css']
})
export class UpsertMovieComponent {
  isCreate?: boolean;
  title?: string;
  published_year?: number;
  poster_image?: any;
  movie?: any;
  new_movie?: any;
  selectedImage?: any = null;

  constructor(private router: Router, private movieService: MovieService) {}

  ngOnInit() {

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

  select_poster(event: any) {
    this.poster_image = event.target.files[0]
    this.selectedImage = this.poster_image;
    const reader = new FileReader();
        reader.onload = e => this.selectedImage = reader.result;

        reader.readAsDataURL(this.selectedImage)
  }

  add_movie() {
    let new_movie = {
      title: this.title,
      published_year: this.published_year,
    }

    // if (this.file) {
    //   this.movieService.createMovie(this.file).subscribe(resp => {
    //     alert("Uploaded")
    //   })
    // } else {
    //   alert("Please select a file first")
    // }
  }


  cancel() {
    this.router.navigate(['/movielist'])
  }

  update_movie() {

  }
}
