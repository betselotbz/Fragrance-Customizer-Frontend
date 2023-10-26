//perfume service
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:9092/';

  constructor(private http: HttpClient) {
  }

  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}api/user-cart-items/`);
  }

  createCartItem(itemId: number, itemType: string) {
    const cartData: any = {
      perfume_id: itemId
    };
    // if (itemType === 'perfume'){
    //   cartData['perfume'] = {
    //     id: itemId
    //   }
    // }
    //
    // if (itemType==='custom'){
    //   cartData['customFragrance'] = {
    //     id: itemId
    //   }
    // }

    return this.http.post<any[]>(`${this.apiUrl}api/user-cart-items/`, cartData);
  }


}
