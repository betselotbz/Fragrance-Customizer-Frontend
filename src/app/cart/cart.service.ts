//perfume service
import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {CustomFragrance, User, UserCartItem} from "../shared/models";
import {AuthenticationService} from "../authentication.service";

@Injectable({
    providedIn: 'root',
})
export class CartService implements OnDestroy {
    private apiUrl = 'http://localhost:9092/';

    private userSubscription: Subscription;
    currentUser: User = {};


    constructor(private http: HttpClient, private authService: AuthenticationService) {
        this.userSubscription = this.authService.loggedIn$.subscribe(
            loggedInUser => this.currentUser = loggedInUser
        );
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();

    }

    getCartItems(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}api/user-cart-items/`);
    }


    createItem(item: UserCartItem) {
        // item['user']!['id'] = this.currentUser.id;
        return this.http.post<any[]>(`${this.apiUrl}api/user-cart-items/`, {...item, user: {id: this.currentUser.id}});
    }

    createCustomFragranceCartItem(customFragrance: CustomFragrance, quantity: number) {
        //first save custom fragrance
        this.http.post<any>(`${this.apiUrl}api/custom-fragrance/`, {name: customFragrance.name}).subscribe((data) => {
            const fragrangeId = data.data.id;
            console.log('saved fragrangeId', fragrangeId)


            // save all ingredients
            customFragrance.ingredients?.forEach(ing => {
                this.http.post(`${this.apiUrl}api/ingredients/`, {
                    name: ing.name,
                    image: ing.image,
                    customFragrance: {
                        id: fragrangeId
                    }
                }).subscribe(d => {
                    console.log('saved ingredients', d);
                })
            })

            // then create cart item for this fragrance
            this.createItem({user: {id: this.currentUser.id}, customFragrance: {id: fragrangeId}, quantity}).subscribe(d3 => {
                console.log('cartItem for custom fragrance', d3)
            })
        });

        // customFragrance.ingredients?.forEach(i => {
        //   this.http.post<any[]>(`${this.apiUrl}api/user-cart-items/`, item);
        // })
        // return this.http.post<any[]>(`${this.apiUrl}api/user-cart-items/`, item);
    }


}
