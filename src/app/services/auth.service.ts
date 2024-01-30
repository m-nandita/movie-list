import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '../models/token';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8081/api/auth";
  private tokenSubject?: BehaviorSubject<Token>;
  private token?: Observable<Token>;

  constructor(private http: HttpClient, private route: Router) {
    let storedToken = localStorage.getItem('accessToken');
    this.tokenSubject = new BehaviorSubject<Token>(JSON.parse(storedToken ? storedToken : '{}'));
    this.token = this.tokenSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<Token>(this.baseUrl + '/signin', {email, password}).pipe(map(token => {
      const user_token: Token = token;
      localStorage.setItem('accessToken', JSON.stringify(user_token))
      this.tokenSubject?.next(user_token);
      return user_token;
    }))
  }

  logOut() {
    localStorage.clear();
    this.tokenSubject?.next({});
    this.route.navigate(['/signin']);
  }

  public tokenValue(): Token | undefined {
    return this.tokenSubject?.value
  }
}
