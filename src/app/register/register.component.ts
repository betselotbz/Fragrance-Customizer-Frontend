// login.component.ts
import {Component} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
    email: string = '';
    password: string = '';
    name: string = '';

    constructor(private authService: AuthenticationService, private router: Router) {
    }

    register(): void {

        this.authService.register(this.name, this.email, this.password).subscribe(response => {
                this.router.navigate(['/login']);
            },
            (error: any) => {
                console.error('Register error:', error);
            })
    }
}
