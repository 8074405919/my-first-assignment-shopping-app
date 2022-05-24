import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'product',
  templateUrl:'./product.component.html',
  styleUrls:['./product.component.scss'],
})
export class ProductComponent {
  constructor(public dataService: DataService) {

  }
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product: any) {
    this.productAdded.emit(product);
    console.log(this.dataService.products)
  }
}