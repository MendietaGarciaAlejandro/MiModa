import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { ProductListComponent } from './features/product-list/product-list';
import { ProductDetailComponent } from './features/product-detail/product-detail';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'new', component: ProductListComponent, data: { category: 'new' } }, // Reusing List for now
    { path: '**', redirectTo: '' }
];
