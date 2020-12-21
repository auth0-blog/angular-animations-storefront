import { Component, Input } from '@angular/core';
import { CartService, IProduct } from 'src/app/core';

@Component({
  selector: 'app-cart-product-card',
  templateUrl: './cart-product-card.component.html',
})
export class CartProductCardComponent {
  @Input() product: IProduct;

  constructor(private cartService: CartService) {}

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
