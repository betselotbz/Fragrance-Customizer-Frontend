import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PerfumeService} from './perfume.service';
import {CartService} from '../cart/cart.service';
import {Perfume, UserCartItem} from "../shared/models";
import {UserCartService} from "../userCart.service";


@Component({
    selector: 'app-perfume',
    templateUrl: './perfume.component.html',
    styleUrls: ['./perfume.component.css'],
})
export class PerfumeComponent implements OnInit {
    perfumes: Perfume[] = [];
    displayedPerfumes: Perfume[] = [];
    cartOpen: boolean = false;

    constructor(
        private perfumeService: PerfumeService,
        private cartService: CartService,
        private route: ActivatedRoute,
        private userCart: UserCartService
    ) {
    }

    ngOnInit(): void {


        this.route.params.subscribe((params: Params) => {
            const family = params['family'];
            const id = params['id'];

            if (family) {
                this.perfumeService.getPerfumesByFamily(family).subscribe((data) => {
                    this.perfumes = data;
                    this.displayedPerfumes = data; // Initially, display all perfumes for the family
                });
            } else if (id) {
                this.perfumeService.getPerfumeById(id).subscribe((data) => {
                    this.perfumes = [data];
                    this.displayedPerfumes = [data]; // Display the single perfume
                });
            } else {
                this.perfumeService.getPerfumes().subscribe((data) => {
                    this.perfumes = data;
                    this.displayedPerfumes = data; // Initially, display all perfumes
                });
            }
        });
    }

    toggleCart() {
        this.cartOpen = !this.cartOpen;
    }

    closeCart() {
        this.cartOpen = false;
    }

    onClickAddToCart(perfume: Perfume) {

        const items = this.userCart.getUserCartItems()
        const item: UserCartItem = {
            perfume: perfume,
            user: {
                id: 1
            }
        }
        this.userCart.setUserCartItems([...items, item])
    }

    filterByFamily(family: string): void {
        if (family === 'all') {
            // If 'all' is selected, show all perfumes
            this.displayedPerfumes = this.perfumes;
        } else {
            // Filter perfumes based on the selected family
            this.displayedPerfumes = this.perfumes.filter(perfume => perfume.family === family);
        }
    }

}

