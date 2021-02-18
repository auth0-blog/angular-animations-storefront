import { Component } from '@angular/core';
import { BaseComponent, CartService, UIService } from '../../../core';
import { SlideFadeLeft } from '../../animations';

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

  checkout(): void {
    this.uiService.toggleOrderConfirmation(true);
  }
}
