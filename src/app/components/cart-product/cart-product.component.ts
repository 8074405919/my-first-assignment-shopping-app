import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  products: any
  constructor(public dataService: DataService) {
  }
  @Output() productRemoved = new EventEmitter();
  modelChanged(product: any) {
    if (this.products.num === 0) {
      this.productRemoved.emit(this.products)
    }
  }
  ngOnInit(): void {
    this.products = [{ num: 0 }]
    this.dataService.shoppingCartList.subscribe(hello => {
      this.products = hello
    })
    console.log(this.products)
  }
}