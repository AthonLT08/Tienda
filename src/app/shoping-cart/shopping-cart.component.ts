import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
deleteItem(_t4: CartItem) {
throw new Error('Method not implemented.');
}
  cartItems: CartItem[] = [
    {
      imageUrl: 'headphones.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      imageUrl: 'keyboard.jpg',
      name: 'Teclado',
      price: 14.5,
    },
    {
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 199.99,
    },
  ];

  get total(): number {
    return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
