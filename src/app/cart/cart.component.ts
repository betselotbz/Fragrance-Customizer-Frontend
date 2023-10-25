// cart.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Initialize or fetch cart items here
    this.cartItems = [
      { name: 'Item 1', price: 10.99 },
      { name: 'Item 2', price: 19.99 },
      // Add more items as needed
    ];
  }

  onCheckout(): void {
    // Handle checkout logic here
    console.log('Checkout clicked!');
  }
}
