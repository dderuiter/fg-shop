import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopDateService {
  private shopDateSource: BehaviorSubject<String> = new BehaviorSubject(new String());
  currentShopDate: Observable<String> = this.shopDateSource.asObservable();

  constructor() {
  }

  updateShopDate(shopDate: string) {
    this.shopDateSource.next(shopDate);
  }
}