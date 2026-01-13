import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product, ProductService } from '../../core/services/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  featuredProducts$!: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.featuredProducts$ = this.productService.getFeaturedProducts();
  }
}
