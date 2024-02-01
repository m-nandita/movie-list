import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UpsertMovieComponent } from './components/upsert-movie/upsert-movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path: 'signin', component: SignInComponent },
  { path: 'addmovie', component: UpsertMovieComponent, canActivate: [AuthGuard]},
  { path: 'editmovie', component: UpsertMovieComponent, canActivate: [AuthGuard]},
  { path: 'movielist', component: MovieListComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
