import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  shoppingCartList = new BehaviorSubject<any>([])
  products: any = [];
  calcTotal() {
    this.shoppingCartList.subscribe(resp => {
      this.products = resp
    })
    return this.products.reduce((acc, prod) => acc += prod.num, 0)
  }
  calcTotalPrice(){
    this.shoppingCartList.subscribe(resp => {
      this.products = resp
    })
    return this.products.reduce((acc, prod) => acc += prod.num*prod.price, 0)
  }
}
