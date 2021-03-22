import { Component, Input } from '@angular/core';
import {
  animate,
  animation,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  BaseComponent,
  CartService,
  IProduct,
  UIService,
} from '../../../../../core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  animations: [
    trigger('addToCartText', [
      transition(
        ':enter',
        animation([
          style({
            transform: 'translate(200px,0)',
          }),
          animate(
            '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
            style({
              transform: 'translate(0)',
            })
          ),
        ])
      ),
      transition(
        ':leave',
        animation([
          style({ transform: 'translate(0)' }),
          animate(
            '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
            style({
              transform: 'translate(-200px,0)',
            })
          ),
        ])
      ),
    ]),
  ],
})
export class CartButtonComponent extends BaseComponent {
  @Input() product: IProduct;
  addState: 'DEFAULT' | 'ADDED' = 'DEFAULT';
  animated$ = this.uiService.selectAnimated$();

  constructor(private uiService: UIService, private cartService: CartService) {
    super();
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
}
