import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../core/services/product';
import { CartService } from '../../core/services/cart';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CartDrawerComponent } from '../cart-drawer/cart-drawer'; // Update relative path

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  relatedProducts: Product[] = [];
  activeSize: string | null = null;
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.productService.getProductById(id);
      })
    ).subscribe(product => {
      this.product = product;
      this.activeSize = null; // Reset size on product change
      if (product) {
        this.productService.getFeaturedProducts().subscribe(related => {
          this.relatedProducts = related.filter(p => p.id !== product.id).slice(0, 3);
        });
      }
    });
  }

  selectSize(size: string) {
    this.activeSize = size;
  }

  addToCart() {
    if (!this.activeSize) {
      alert('Por favor selecciona una talla');
      return;
    }

    if (this.product) {
      this.cartService.addToCart(this.product, this.activeSize);
      // Optional: Open cart drawer via a service event or similar interaction
      // For now, simplicity:
      alert('Producto añadido a la cesta');
    }
  }
}
