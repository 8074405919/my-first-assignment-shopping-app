import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  constructor(public dataService: DataService) { }
  products: any
  @Output() productRemoved = new EventEmitter();
  ngOnInit(): void {
    this.products = [{ num: 0 }]
    this.dataService.shoppingCartList.subscribe(hello => {
      this.products = hello
    })
    console.log(this.products)
  }

  removeProduct(product: any) {
    this.productRemoved.emit(product)
  }
}