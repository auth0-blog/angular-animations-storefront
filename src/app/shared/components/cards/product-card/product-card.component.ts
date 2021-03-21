import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {
  BaseComponent,
  CartService,
  IProduct,
  UIService,
} from '../../../../core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent extends BaseComponent {
  @Input() product: IProduct;

  @ViewChild('displayCard') displayCard: ElementRef;

  animated$ = this.uiService.selectAnimated$();
  private _isAdding = false;
  constructor(private cartService: CartService, private uiService: UIService) {
    super();
  }

  addToCart(selectedProduct: IProduct): void {
    // if in the middle of an animation, wait until its done prior
    // to allowing the user to add to cart again
    if (this._isAdding) {
      return;
    }
    this.cartService.addToCart(selectedProduct);
  }

  viewProductDetails(selectedProduct: IProduct): void {
    this.uiService.viewProductDetails(selectedProduct);
  }

  noop(event): void {
    event.stopPropagation();
  }
}
