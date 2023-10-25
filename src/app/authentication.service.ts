// authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:9092'; // Adjust the URL based on your backend API

  constructor(private http: HttpClient) {}

  login(emailAddress: string, password: string): Observable<any> {
    const loginData = { emailAddress, password };
    return this.http.post(`${this.apiUrl}/auth/users/login/`, loginData);
    // Assuming your backend API has an endpoint for login, adjust the URL accordingly
  }

  setAuthToken(token: string): void {
    // Save the token to local storage for persistence
    localStorage.setItem('authToken', token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }
  removeToken(){
    return localStorage.removeItem('authToken')
  }

  private userLoggedInSubject = new BehaviorSubject<boolean>(false);
  userLoggedIn$ = this.userLoggedInSubject.asObservable();

  setUserLoggedIn(value: boolean) {
    this.userLoggedInSubject.next(value);
  }

  isUserLoggedIn(): boolean {
    return this.userLoggedInSubject.value;
  }
}

