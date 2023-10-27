import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart/cart.service";
import {UserCartItem} from "../shared/models";
// Define a type for the order data
type Order = {
    name: string,
    totalAmount: number
}

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // Array to store grouped orders
    orders: Order[] = [];
  // Array to store user cart items
    userItems: UserCartItem[] = []


    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
      // Fetch user cart items from the CartService
        this.cartService.getCartItems().subscribe((data: any) => {
          // Store user cart items
            this.userItems = data.data;
            const grouppedOrder: Record<string, Order> = {}
          // Iterate through user cart items to calculate total amounts
            this.userItems.forEach(item => {
              // Create a dictionary to group orders by user name and id
                const key = `${item.user?.name}-${item.user?.id}`
              // If the key doesn't exist in the dictionary, create it
                if (!grouppedOrder[key]) {
                    grouppedOrder[key] = {name: item.user?.name!, totalAmount: 0};
                }
              // Calculate the total amount
                let total;
                if (item.perfume) {
                    total = item.perfume.price! * item.quantity!
                } else {
                    total = 20 * item.quantity!
                }
              // Add the total amount to the existing total for the user
                grouppedOrder[key].totalAmount += total;
            })

            this.orders = Object.values(grouppedOrder)
        })
    }
}
