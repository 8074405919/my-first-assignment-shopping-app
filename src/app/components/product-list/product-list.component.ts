import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(public dataService: DataService) { }
  @Input()
  products: any[] = [];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product: any) {
    this.productAdded.emit(product);
  }
  ngOnInit(): void {
    console.log(this.products)
  }
}
