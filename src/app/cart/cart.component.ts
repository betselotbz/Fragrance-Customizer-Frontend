// cart.component.ts
import {Component, OnInit} from '@angular/core';
import {UserCartService} from "../userCart.service";
import {CustomFragrance, UserCartItem} from "../shared/models";
import {CartService} from "./cart.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    cartItems: UserCartItem[] = [];
    quantity: number = 1;


    constructor(private userCart: UserCartService, private cartService: CartService) {
    }
  // Subscribe to the userCartItemSubject to get updates on cart items
    ngOnInit(): void {

        this.userCart.userCartItemSubject$.subscribe(data => {
            this.cartItems = data;
        })
    }
  // Handle the checkout process
    onCheckout(): void {
        // console.log(this.cartItems)

        this.cartItems.forEach(item => {

            if (item.perfume) {
                // create item with perfume
                this.cartService.createItem({
                    perfume: {
                        id: item.perfume.id
                    },
                    quantity: this.quantity
                }).subscribe(data => {
                    console.log(data)
                })
            }

            if (item.customFragrance) {
                // create custom fragrances and item
                this.cartService.createCustomFragranceCartItem(item.customFragrance, this.quantity)
            }

        })

        console.log('Checkout clicked!');
    }

    quantityChanged($event: Event, cartItem: UserCartItem) {
        cartItem.quantity = Number(($event.target as unknown as any).value)
        this.quantity = Number(($event.target as unknown as any).value)
    }

    getTotalPrice() {
        let totalPrice = 0.0
        this.cartItems.forEach(i => {
            if (i.perfume?.price) {
                totalPrice += i.perfume?.price * (i.quantity ?? 1)
            }
            if (i.customFragrance?.price) {
                totalPrice += i.customFragrance?.price * (i.quantity ?? 1)
            }
        })
        return totalPrice
    }
}
