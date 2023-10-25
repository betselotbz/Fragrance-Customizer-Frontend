import {Component, OnDestroy} from '@angular/core';
import {AuthenticationService} from "../../authentication.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy{
  isLoggedIn: boolean= true;
  private subscription: Subscription;
  onClickLogout() {
    this.authService.setUserLoggedIn(false)
    this.authService.removeToken()
    console.log(9879)
  };
  constructor(private authService: AuthenticationService) {
    this.subscription = this.authService.userLoggedIn$.subscribe(
      loggedIn => this.isLoggedIn = loggedIn
    );
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
