//perfume service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomService {
  private apiUrl = 'http://localhost:9092/'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  getPerfumes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}api/custom-fragrance`);
  }
}
