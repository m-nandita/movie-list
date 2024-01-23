import { Component } from '@angular/core';
import * as data from '../../../assets/data/data.json';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies?: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.httpClient.get('../../../assets/data/data.json').subscribe((result) => {
      this.movies = result;
    });
  }

  edit_movie(movie: any) {
    this.router.navigate(['/editmovie'], movie);
  }
}
