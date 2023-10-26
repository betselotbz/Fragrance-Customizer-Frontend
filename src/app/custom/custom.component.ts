import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

// Define the type for custom item
export type CustomItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  userCartItems: any[]; // Adjust this based on actual structure
};

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit {
  customs: CustomItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Use mock data until the actual data is fetched
    this.customs = this.getMockCustoms();
  }

  onClickAddToCart(custom: CustomItem) {
    this.cartService.createCartItem(custom.id, 'custom').subscribe((data) => {
      console.log(data);
    });
    console.log(custom);
  }

  // Mock data for custom items
  private getMockCustoms(): CustomItem[] {
    return [
      {
        id: 1,
        name: 'Rose',
        description: 'Description for Mock Custom 1',
        image: "https://www.arkanlabs.com/image/cache/catalog/2026911000028756452-500x500.jpg",
        userCartItems: [], // Add actual data based on structure
      },
      {
        id: 2,
        name: 'Jasmine',
        description: 'Description for Mock Custom 2',
        image: 'https://shopme365.com/image/cache/catalog/koreancosmetics/apieu/apieumyhandyroll-onperfumejasmine10ml-400x350.jpg',
        userCartItems: [],
      },
      {
        id: 3,
        name: 'Basil',
        description: 'Description for Mock Custom 1',
        image: 'https://shopme365.com/image/cache/catalog/koreancosmetics/apieu/apieumyhandyroll-onperfumebasil10ml-500x500.jpg',
        userCartItems: [],
      },
      {
        id: 4,
        name: 'Cashmere',
        description: 'Description for Mock Custom 2',
        image: 'https://koreacosmeticsbn.com/cdn/shop/products/06bf1c72-dfb1-4017-be15-4b94a94888ce_5000x.webp?v=1667456544',
        userCartItems: [],
      },    {
        id: 5,
        name: 'Bergamot',
        description: 'Description for Mock Custom 1',
        image: 'https://cdn.experimentalperfumeclub.com/wp-content/uploads/2022/11/EPC-Bergamot-Incense-50ml-sq-new-400x400.jpg',
        userCartItems: [],
      },
      {
        id: 6,
        name: 'Amber',
        description: 'Description for Mock Custom 2',
        image: 'https://cdn.experimentalperfumeclub.com/wp-content/uploads/2022/11/EPC-Amber-Iris-50ml-sq-new-400x400.jpg',
        userCartItems: [],
      },
      {
        id: 7,
        name: 'Peony',
        description: 'Description for Mock Custom 1',
        image: 'https://koreacosmeticsbn.com/cdn/shop/products/peonyperfume_530x_2x_c6ca51e7-e5f3-4541-9a14-20c3deddffce_2000x.webp?v=1667456545',
        userCartItems: [],
      },
      {
        id: 8,
        name: 'Sandalwood',
        description: 'Description for Mock Custom 2',
        image: 'https://cdn.experimentalperfumeclub.com/wp-content/uploads/2022/11/EPC-Sandalwood-Musk-50ml-sq-new.jpg',
        userCartItems: [],
      },
      {
        id: 8,
        name: 'Sandalwood',
        description: 'Description for Mock Custom 2',
        image: 'https://cdn.experimentalperfumeclub.com/wp-content/uploads/2022/11/EPC-Sandalwood-Musk-50ml-sq-new.jpg',
        userCartItems: [],
      },
      {
        id: 8,
        name: 'Patchouli',
        description: 'Description for Mock Custom 2',
        image: 'https://rootedearth.com/cdn/shop/products/il_fullxfull.1198345357_8yr6_900x.jpg?v=1550961532',
        userCartItems: [],
      },
      {
        id: 8,
        name: 'Vanilla',
        description: 'Description for Mock Custom 2',
        image: 'https://cdn11.bigcommerce.com/s-jdd57/images/stencil/2048x2048/products/153/887/vanilla_fragrance_Oil__58437.1543524968.jpg?c=2',
        userCartItems: [],
      },
      {
        id: 8,
        name: 'Citrus',
        description: 'Description for Mock Custom 2',
        image: 'https://veroniquegabai.com/cdn/shop/products/10ml-oranges_1400x.jpg?v=1665687527',
        userCartItems: [],
      },
      {
        id: 8,
        name: 'Grapefruit',
        description: 'Description for Mock Custom 2',
        image: 'https://koreacosmeticsbn.com/cdn/shop/products/APIEU-Handy-Roll-On-Perfume-Grapefruit_2000x.jpg?v=1667456543',
        userCartItems: [],
      },
      {
        id: 8,
        name: 'Tonka Sesame',
        description: 'Description for Mock Custom 2',
        image: 'https://cdn.experimentalperfumeclub.com/wp-content/uploads/2022/11/EPC-Tonka-Sesame-50ml-sq.jpg',
        userCartItems: [],
      },
      {
        id: 8,
        name: 'Cedarwood Absinth',
        description: 'Description for Mock Custom 2',
        image: 'https://experimentalperfumeclub.com/wp-content/uploads/2022/11/Cedarwood-Absinth-50ml-LR.jpg',
        userCartItems: [],
      },

      {
        id: 8,
        name: 'Plum',
        description: 'Description for Mock Custom 2',
        image: 'https://koreacosmeticsbn.com/cdn/shop/products/plum-1_4d719abc87bb4025bbeb8c3f18e0ec38_2000x.jpg?v=1667456544',
        userCartItems: [],
      },


    ];
  }
}
