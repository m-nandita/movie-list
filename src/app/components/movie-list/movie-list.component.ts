import { Component } from '@angular/core';
import * as data from '../../../assets/data/data.json';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies?: any;
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        console.log(data)
        if(data) {
          this.movies = data;
        }
      }
    })
  }

  edit_movie(movie: any) {
    this.router.navigate(['/editmovie'], movie);
  }

  add_new_movie() {
    this.router.navigate(['/addmovie'])
  }

  logout() {
    
  }
}
