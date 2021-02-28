import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
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
    tap((count) => {
      if (count > 0 && this.cartButton?.nativeElement) {
        this.cartButton.nativeElement.animate(
          [
            // keyframes
            { transform: 'translate3d(0, -5px, 0) scaleY(1.1)' },
            { transform: 'translate3d(0, -10px, 0) scaleY(1.05)' },
            { transform: 'translate3d(0, 5px, 0) scaleY(0.95)' },
            { transform: 'translate3d(0, 0, 0) scaleY(1)' },
          ],
          {
            // timing options
            duration: 200,
          }
        );
      }
    })
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
