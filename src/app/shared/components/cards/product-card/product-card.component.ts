import { Component, Input } from '@angular/core';
import { BaseComponent, CartService, IProduct } from '../../../../core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent extends BaseComponent {
  @Input() product: IProduct;

  constructor(private cartService: CartService) {
    super();
  }

  addToCart(selectedProduct: IProduct): void {
    this.cartService.addToCart(selectedProduct);
  }
}
