import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product, ProductService } from '../../core/services/product';
import { Observable, map, switchMap, combineLatest } from 'rxjs'; // Fix imports
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories = ['Todos', 'Camisetas', 'Pantalones', 'Chaquetas', 'Vestidos', 'Sudaderas', 'Calzado'];
  selectedCategory = 'Todos';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filterProducts();
    });

    // Handle query params or route params if needed needed later
  }

  setCategory(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  filterProducts() {
    if (this.selectedCategory === 'Todos') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === this.selectedCategory);
    }
  }
}
