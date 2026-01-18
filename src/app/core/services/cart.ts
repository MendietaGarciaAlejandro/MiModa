import { Injectable, computed, signal, effect } from '@angular/core';
import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  // Computed values
  cartCount = computed(() => this.cartItems().reduce((acc, item) => acc + item.quantity, 0));
  cartTotal = computed(() => this.cartItems().reduce((acc, item) => acc + (item.product.price * item.quantity), 0));

  constructor() {
    // Load initial state
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems.set(JSON.parse(savedCart));
    }

    // Persist on change
    effect(() => {
      localStorage.setItem('cart', JSON.stringify(this.cartItems()));
    });
  }

  addToCart(product: Product, size: string) {
    this.cartItems.update(items => {
      const existingItem = items.find(item => item.product.id === product.id && item.size === size);

      if (existingItem) {
        return items.map(item =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { product, size, quantity: 1 }];
    });
  }

  removeFromCart(productId: number, size: string) {
    this.cartItems.update(items =>
      items.filter(item => !(item.product.id === productId && item.size === size))
    );
  }

  updateQuantity(productId: number, size: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId, size);
      return;
    }

    this.cartItems.update(items =>
      items.map(item =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
