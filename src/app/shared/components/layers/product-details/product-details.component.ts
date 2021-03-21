import { Component, Input } from '@angular/core';
import {
  BaseComponent,
  CartService,
  IProduct,
  UIService,
} from '../../../../core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent extends BaseComponent {
  @Input() product: IProduct;

  addState: 'DEFAULT' | 'ADDED' = 'DEFAULT';
  animated$ = this.uiService.selectAnimated$();
  constructor(private uiService: UIService, private cartService: CartService) {
    super();
  }

  closeProductDetails(): void {
    this.uiService.closeProductDetails();
  }

  addToCart(): void {
    if (this.addState === 'ADDED') {
      return;
    }
    this.addState = 'ADDED';
    this.cartService.addToCart(this.product);

    // reset to default state
    // some delay here to simulate some processing time
    // when user clicks on add to cart
    setTimeout(() => {
      this.addState = 'DEFAULT';
    }, 2000);
  }

  noop(event) {
    event.stopPropagation();
  }
}
