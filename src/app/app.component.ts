import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productList = [
    { name: 'Sport Shoes', price: 8799 },
    { name: 'Gym Tracks', price: 999 },
    { name: 'Skipping Rope', price: 99 },
    { name: 'Towel', price: 90 },
    { name: 'Dumbbell', price: 1324 }
  ];
  cartProductList: any = [];
  constructor(public dataService: DataService) { }

  addProductToCart(product: { name: any; }) {
    const productExistInCart = this.cartProductList.find(({ name }) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 }); // enhance "porduct" opject with "num" property
      this.dataService.shoppingCartList.next(this.cartProductList)
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product: { name: any; }) {
    this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name)
  }
}
