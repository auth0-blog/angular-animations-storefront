import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, map, withLatestFrom } from 'rxjs/operators';
import { BaseComponent, CartService, UIService } from '../../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent {
  @ViewChild('cartButton') cartButton: ElementRef;
  searchQuery = '';
  cartCount$ = this.cartService.selectTotalProductQuantity$().pipe(
    delay(600),
    withLatestFrom(this.uiService.selectAnimated$()),
    map(([count, isAnimated]) => count)
  );

  constructor(private uiService: UIService, private cartService: CartService) {
    super();
  }

  openCart(): void {
    this.uiService.toggleCart(true);
  }

  onSearch(keyword: string): void {
    this.uiService.search(keyword);
  }
}
