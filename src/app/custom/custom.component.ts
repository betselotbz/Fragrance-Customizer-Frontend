// custom.component.ts
import { Component, OnInit } from '@angular/core';
import { CustomService } from './custom.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit {
  customs: any[] = [];

  // Mock data to use during development/testing
  mockCustoms: any[] = [
    {
      name: 'Chanel No. 5',
      description: 'Classic floral fragrance with notes of jasmine and rose.',
      image: 'assets/Image/perfume4.webp',
    },
    {
      name: 'Chanel No. 5',
      description: 'Classic floral fragrance with notes of jasmine and rose.',
      image: 'assets/Image/perfume4.webp',
    },
    {
      name: 'Chanel No. 5',
      description: 'Classic floral fragrance with notes of jasmine and rose.',
      image: 'assets/Image/perfume4.webp',
    },
    {
      name: 'Chanel No. 5',
      description: 'Classic floral fragrance with notes of jasmine and rose.',
      image: 'assets/Image/perfume4.webp',
    },
    {
      name: 'Chanel No. 5',
      description: 'Classic floral fragrance with notes of jasmine and rose.',
      image: 'assets/Image/perfume4.webp',
    },
    {
      name: 'Chanel No. 5',
      description: 'Classic floral fragrance with notes of jasmine and rose.',
      image: 'assets/Image/perfume4.webp',
    },
    // Add more mock data items as needed
  ];

  constructor(private customService: CustomService) {}

  ngOnInit(): void {
    // Initially, use the mock data
    this.customs = this.mockCustoms;

    // Fetch custom items data from the service (comment out or remove this block during development if using mock data)
    // this.customService.getCustomItems().subscribe((data) => {
    //   // Once the actual data is fetched, replace the mock data
    //   this.customItems = data;
    // });
  }
}
