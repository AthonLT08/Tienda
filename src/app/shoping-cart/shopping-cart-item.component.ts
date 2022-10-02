import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
onDeleteClicked() {
throw new Error('Method not implemented.');
}
  @Input() cartItem!: CartItem;

  @Output() cartItemDelete = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
    this.onDeleteClicked(); void {
      this:this.cartItemDelete.emit(),
  }
  }
}