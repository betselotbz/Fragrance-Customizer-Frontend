import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken: string | null = null;

  setAuthToken(token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'): void {
    this.authToken = token;
    // You may want to save the token to local storage for persistence
    localStorage.setItem('authToken', token);
  }

  getAuthToken(): string | null {

    return this.authToken || localStorage.getItem('authToken');
  }

  // Below I can Add methods for login, logout, etc.
}
