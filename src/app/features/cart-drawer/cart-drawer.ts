import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css'
})
export class CartDrawerComponent {
  @Output() close = new EventEmitter<void>();

  constructor(public cartService: CartService) { }

  closeDrawer() {
    this.close.emit();
  }

  updateQuantity(productId: number, size: string, change: number, currentQuantity: number) {
    this.cartService.updateQuantity(productId, size, currentQuantity + change);
  }

  removeItem(productId: number, size: string) {
    this.cartService.removeFromCart(productId, size);
  }
}
