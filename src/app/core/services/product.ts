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
    },
    {
      id: 7,
      name: 'Camisa Lino Blanca',
      price: 39.99,
      category: 'Camisas',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      name: 'Abrigo Lana Largo',
      price: 129.00,
      category: 'Abrigos',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      name: 'Jeans Rectos Clásicos',
      price: 49.95,
      category: 'Pantalones',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 10,
      name: 'Falda Plisada Midi',
      price: 35.00,
      category: 'Faldas',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 11,
      name: 'Blazer Estructurado',
      price: 79.99,
      category: 'Chaquetas',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 12,
      name: 'Botines Chelsea Piel',
      price: 89.95,
      category: 'Calzado',
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 13,
      name: 'Bufanda Cachemir',
      price: 29.99,
      category: 'Accesorios',
      image: 'https://images.unsplash.com/photo-1520903920243-00d872a2e1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isNew: true
    },
    {
      id: 14,
      name: 'Gafas de Sol Retro',
      price: 19.99,
      category: 'Accesorios',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 15,
      name: 'Mochila Cuero Minimal',
      price: 65.00,
      category: 'Accesorios',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
