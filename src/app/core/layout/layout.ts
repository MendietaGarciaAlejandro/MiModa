import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  // Note: LayoutComponent uses ng-content usually, but if acting as wrapper for router in app.component, it's fine.
  // Actually, if I put <router-outlet> in app.component, Layout just wraps it with ng-content.
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class LayoutComponent { }
