import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies?: any;
  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) {}
  offset?: number;
  limit?: number;
  total_movies?: number;
  page?: number;
  ngOnInit() {

    // this.movieService.getPage(1, 8).subscribe({
    //   next: (data) => {
    //     if(data) {
    //       this.movies = data;
    //     }
    //   }
    // })
    this.movieService.getMovies().subscribe({
      next: (data) => {
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

  loadPage(event: any) {
    let pageNumber = event.target.value - 1;
    this.movieService.getPage(8 * pageNumber, 8).subscribe({
      next: (data) => {
        if(data) {
          this.movies = data;
        }
      }
    })

  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
