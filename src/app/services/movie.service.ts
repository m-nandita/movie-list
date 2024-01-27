import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = "http://localhost:8081/api/movies";
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any>  {
    return this.http.get(`${this.baseUrl}`);
  }

  getMovie(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  createMovie(data: any, file: any): Observable<any> {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('published_year', data.published_year);
    formData.append('poster_img', file)
    const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
      responseType: 'json'
    });
    return this.http.request(req);
  }

  updateMovie(data: any, id: number, file?: any): Observable<any> {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('published_year', data.published_year);
    if(file) {
      formData.append('poster_img', file)
    }
    const req = new HttpRequest('PUT', `${this.baseUrl}/${id}`, formData, {
      responseType: 'json'
    });
    return this.http.request(req);
    // return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  getPage(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/page/${offset}/${limit}`)
  }

}
