import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomService {
  private apiUrl = 'http://localhost:9092/'; // Backend URL

  constructor(private http: HttpClient) {}

  getCustomFragrance(): Observable<any[]> {
    const res = this.http.get<any[]>(`${this.apiUrl}api/custom-fragrance/`);
    console.log(res);
    return res;
  }
}

