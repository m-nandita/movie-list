import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies?: any;
  p: any = 1;
  constructor(
    private movieService: MovieService,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        if (data) {
          this.movies = data;
        }
      },
    });
  }

  edit_movie(movie: any) {
    this.router.navigate(['/editmovie'], movie);
  }

  add_new_movie() {
    this.router.navigate(['/addmovie']);
  }

  logout() {
    this.authService.logOut();
  }
}
