import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../authentication.service";
import {Subscription} from "rxjs";
import {User} from "../models";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy, OnInit {
    isLoggedIn: boolean = true;
    currentUser: User = {};
    private subscription: Subscription;
    private subscription2: Subscription;

    onClickLogout() {
        this.authService.setUserLoggedIn(false)
        this.authService.removeToken()
        console.log(9879)
    };

    constructor(private authService: AuthenticationService) {
        this.subscription = this.authService.userLoggedIn$.subscribe(
            loggedIn => this.isLoggedIn = loggedIn
        );

        this.subscription2 = this.authService.loggedIn$.subscribe(
            loggedInUser => this.currentUser = loggedInUser
        );
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
    }

    ngOnInit(): void {
        // this.authService.getCurrentUser().subscribe(data => {
        //     console.log(data)
        //     this.currentUser = data.data;
        //     this.isLoggedIn = true;
        // })
    }

}
