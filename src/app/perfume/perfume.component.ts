import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PerfumeService } from './perfume.service';
import { CartService } from '../cart/cart.service';

export type Perfume = {
  "id": number,
  "name": string,
  "family": string,
  "notes": string,
  "image": string,
  "userCartItems": any[]
}

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
    private route: ActivatedRoute
  ) {}

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
    this.cartService.createCartItem(perfume.id, 'perfume').subscribe(data => {
      console.log(data);
    });
    console.log(perfume);
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

