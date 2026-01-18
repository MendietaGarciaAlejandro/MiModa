import { Component, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product, ProductService } from '../../core/services/product';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './search-overlay.html',
  styleUrl: './search-overlay.css'
})
export class SearchOverlayComponent implements AfterViewInit {
  @Output() close = new EventEmitter<void>();
  @ViewChild('searchInput') searchInput!: ElementRef;

  searchTerm = '';
  results: Product[] = [];
  searchSubject = new Subject<string>();

  constructor(private productService: ProductService) {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.performSearch(term);
    });
  }

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();
  }

  onSearchInput(term: string) {
    this.searchSubject.next(term);
  }

  performSearch(term: string) {
    if (!term.trim()) {
      this.results = [];
      return;
    }

    this.productService.getProducts().subscribe(products => {
      this.results = products.filter(p =>
        p.name.toLowerCase().includes(term.toLowerCase()) ||
        p.category.toLowerCase().includes(term.toLowerCase())
      );
    });
  }

  closeOverlay() {
    this.close.emit();
  }
}
