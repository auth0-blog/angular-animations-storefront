import { Component, Input } from '@angular/core';
import { CartService, ICartProduct } from '../../../../core';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
})
export class CartProductCardComponent {
  @Input() product: ICartProduct;

  constructor(private cartService: CartService) {}

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
