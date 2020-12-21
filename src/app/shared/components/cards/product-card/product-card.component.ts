import { Component, Input } from '@angular/core';
import { CartService, IProduct } from 'src/app/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product: IProduct;

  constructor(private cartService: CartService) {}

  addToCart(selectedProduct: IProduct): void {
    this.cartService.addToCart(selectedProduct);
  }
}
