import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Camiseta Básica Premium',
      price: 25.00,
      category: 'Camisetas',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isNew: true
    },
    {
      id: 2,
      name: 'Pantalón Chino Slim',
      price: 45.00,
      category: 'Pantalones',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Chaqueta Denim Vintage',
      price: 89.99,
      category: 'Chaquetas',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isNew: true
    },
    {
      id: 4,
      name: 'Vestido Verano Floral',
      price: 59.50,
      category: 'Vestidos',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Sudadera Oversize Capucha',
      price: 55.00,
      category: 'Sudaderas',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Zapatillas Urbanas',
      price: 75.00,
      category: 'Calzado',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isNew: true
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.products.slice(0, 4));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}
