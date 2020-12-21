import { Component } from '@angular/core';
import { BaseComponent, CartService, UIService } from 'src/app/core';
import { SlideFadeLeft } from 'src/app/shared/animations';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  animations: [SlideFadeLeft],
})
export class CartComponent extends BaseComponent {
  products$ = this.cartService.selectProducts$();
  totalPrice$ = this.cartService.selectTotalPrice$();
  constructor(private uiService: UIService, private cartService: CartService) {
    super();
  }

  closeCart(): void {
    this.uiService.toggleCart(false);
  }
}
