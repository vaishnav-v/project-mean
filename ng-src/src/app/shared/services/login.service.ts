import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  baseURL: string = '/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  login(loginData:Object){
    let URL = this.baseURL + '/login'
    return this.http.post(URL, loginData).pipe(catchError(this.errorHandler));
  }

  signup(signUpData:Object){
    let URL = this.baseURL + '/signup'
    return this.http.post(URL, signUpData).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message || "server error")
  }
}
