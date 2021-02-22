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

  constructor(private uiService: UIService, private cartService: CartService) {
    super();
  }

  closeProductDetails(): void {
    this.uiService.closeProductDetails();
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }

  noop(event) {
    event.stopPropagation();
  }
}
