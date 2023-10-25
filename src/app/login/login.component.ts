// login.component.ts
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        const token = response.jwt; // Adjust the property name based on your API response
        this.authService.setAuthToken(token);
        console.log('Login successful:', response);
        this.authService.setUserLoggedIn(true)

        // Handle successful login, e.g., navigate to another page
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error('Login error:', error);
        this.authService.setUserLoggedIn(false)
        // Handle login error, e.g., display an error message to the user
      }
    );
  }
}
