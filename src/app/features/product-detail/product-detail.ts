import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../core/services/product';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

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
    private productService: ProductService
  ) {}

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
        // Mock related products logic
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
    alert(`Añadido al carrito: ${this.product?.name} (Talla: ${this.activeSize})`);
  }
}
