//perfume.component.ts
import { Component, OnInit } from '@angular/core';
import { PerfumeService } from './perfume.service';

@Component({
  selector: 'app-perfume',
  templateUrl: './perfume.component.html',
  styleUrls: ['./perfume.component.css'],
})
export class PerfumeComponent implements OnInit {
  perfumes: any[] = [];

  // Mock data to use until the actual data is fetched
  mockPerfumes: any[] = [
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

  ];

  constructor(private perfumeService: PerfumeService) {}

  ngOnInit(): void {
    // Initially, use the mock data
    this.perfumes = this.mockPerfumes;

    // Fetch perfumes data from the service
    this.perfumeService.getPerfumes().subscribe((data) => {
      // Once the actual data is fetched, I can replace the mock data
      this.perfumes = data;
    });
  }
}
