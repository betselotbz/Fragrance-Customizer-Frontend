// authentication.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "./shared/models";

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private apiUrl = 'http://localhost:9092';

    constructor(private http: HttpClient) {
    }

    getCurrentUser(): Observable<any> {
        return this.http.get(`${this.apiUrl}/auth/users/currentUser/`);

    }

    login(emailAddress: string, password: string): Observable<any> {
        const loginData = {emailAddress, password};
        return this.http.post(`${this.apiUrl}/auth/users/login/`, loginData);

    }

    register(name: string, emailAddress: string, password: string): Observable<any> {
        const registerData = {name, emailAddress, password};
        return this.http.post(`${this.apiUrl}/auth/users/register/`, registerData);

    }

    setAuthToken(token: string): void {
        // Save the token to local storage for persistence
        localStorage.setItem('authToken', token);
    }

    getAuthToken(): string | null {
        return localStorage.getItem('authToken');
    }

    removeToken() {
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

    private loggedInSubject = new BehaviorSubject<User>({});
    loggedIn$ = this.loggedInSubject.asObservable();

    setLoggedInUser(user: User) {
        this.loggedInSubject.next(user)
    }

    getLoggedInUser(user: User) {
        this.loggedInSubject.value
    }
}

