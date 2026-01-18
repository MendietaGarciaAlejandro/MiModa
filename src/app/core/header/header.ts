import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart';
import { SearchOverlayComponent } from '../../features/search-overlay/search-overlay';
import { CartDrawerComponent } from '../../features/cart-drawer/cart-drawer';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, SearchOverlayComponent, CartDrawerComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isSearchOpen = false;
  isCartOpen = false;

  constructor(public cartService: CartService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
