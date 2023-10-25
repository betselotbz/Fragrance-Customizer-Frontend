import {
  NgFor,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';

import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgbCarouselModule, NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class CarouselComponent {
  images: any = [
    {
      name: '',
      url:  'assets/Image/perfume4.webp',
    },
    {
      name: '',
      url: 'assets/Image/Perfume2.webp',
    },
    {
      name: '',
      url: 'assets/Image/perfume3.jpeg',
    },
    {
      name: '',
      url: 'assets/Image/perfume6.jpeg',
    },
    {
      name: '',
      url: 'assets/Image/perfume5.jpeg',
    },

  ];
  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
