// authentication.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserCartItem} from "./shared/models";


@Injectable({
  providedIn: 'root',
})
export class UserCartService {

  constructor() {
  }


  private userCartItemSubject = new BehaviorSubject<UserCartItem[]>([]);
  userCartItemSubject$ = this.userCartItemSubject.asObservable();

  setUserCartItems(value: UserCartItem[]) {
    this.userCartItemSubject.next(value);
  }

  getUserCartItems(): UserCartItem[] {
    return this.userCartItemSubject.value;
  }
}

