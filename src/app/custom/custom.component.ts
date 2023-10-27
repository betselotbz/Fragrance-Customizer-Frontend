import {Component, OnInit} from '@angular/core';
import {CustomService} from "./custom.service";
import {Ingredient, UserCartItem} from "../shared/models";
import {UserCartService} from "../userCart.service";


@Component({
    selector: 'app-custom',
    templateUrl: './custom.component.html',
    styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit {
    ingredients: Ingredient[] = [];
    customIngredients: Ingredient[] = [];
    fragranceName: string = '';


    constructor(private customService: CustomService, private userCart: UserCartService) {
    }

    ngOnInit(): void {
        this.customService.getAllIngredients().subscribe(data => {
            this.ingredients = data
        })
    }


    onAdd(ingredient: Ingredient) {
        this.customIngredients.push(ingredient)
    }

    /**
     * implement userCartItem creation
     */
    onclickCreateCustomFragrance() {
        const items = this.userCart.getUserCartItems()
        const item: UserCartItem = {
            customFragrance: {
                name: this.fragranceName,
                ingredients: this.customIngredients,
                price: 20.00
            },
            user: {
                id: 1
            }
        }
        this.userCart.setUserCartItems([...items, item])
    }

    handleFragranceName(emittedValue: string) {
        this.fragranceName = emittedValue;
    }
}
