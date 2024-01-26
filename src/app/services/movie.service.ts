import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
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

  createMovie(data: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', data);
    const req = new HttpRequest('POST', `${this.baseUrl}`, formData, {
      responseType: 'json'
    });
    return this.http.request(req);
    // return this.http.post(`${this.baseUrl}`, data)
  }

  updateMovie(data: any, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  getPage(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/page/${offset}/${limit}`)
  }

}
