import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CarouselComponent} from './homepage/carousel/carousel.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PerfumeComponent} from './perfume/perfume.component';
import {AppRoutingModule} from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from '@angular/forms';
import {CustomComponent} from "./custom/custom.component";
import {UserFragranceComponent} from "./custom/user-fragrance/user-fragrance.component";
import {RegisterComponent} from "./register/register.component";
import {OrderComponent} from "./order/order.component";


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomepageComponent,
        FooterComponent,
        PerfumeComponent,
        CartComponent,
        LoginComponent,
        OrderComponent,
        RegisterComponent,
        CustomComponent,
        UserFragranceComponent,
    ],
    imports: [
        BrowserModule,
        CarouselComponent,
        NgbModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },],
    bootstrap: [AppComponent]
})
export class AppModule {
}
