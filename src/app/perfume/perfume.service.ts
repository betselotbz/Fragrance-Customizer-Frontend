//perfume service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerfumeService {
  private apiUrl = 'http://localhost:9092/'; // Backend URL

  constructor(private http: HttpClient) {}

  getPerfumes(): Observable<any[]> {
    const res = this.http.get<any[]>(`${this.apiUrl}api/perfumes/`);
    console.log(res)
    return res
  }
  getPerfumesByFamily(family: string): Observable<any[]> {
    const url = `${this.apiUrl}api/perfumes/family/${family}`;
    return this.http.get<any[]>(url);
  }

  getPerfumeById(id: number): Observable<any> {
    const url = `${this.apiUrl}api/perfumes/${id}`;
    return this.http.get<any>(url);
  }

}
