import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {
  BaseComponent,
  CartService,
  IProduct,
  UIService,
} from '../../../../core';
import { SlideRight } from '../../../animations';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  animations: [SlideRight],
})
export class ProductCardComponent extends BaseComponent {
  @Input() product: IProduct;

  @ViewChild('addToCartLayer') addToCartLayer: ElementRef;
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
    if (this.uiService.animatedCurrentValue()) {
      this._isAdding = true;
      this._animateCard();
    }
  }

  viewProductDetails(selectedProduct: IProduct): void {
    this.uiService.viewProductDetails(selectedProduct);
  }

  private _animateCard(): void {
    this.addToCartLayer.nativeElement.style.visibility = 'visible';
    this.addToCartLayer.nativeElement.style.opacity = 1;
    const DOMrect = this.displayCard.nativeElement.getBoundingClientRect();
    const offsetX =
      (window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth) -
      DOMrect.x -
      50;
    const offsetY = -DOMrect.y + 50;
    const offsetPath = `path("m 150 140 Q ${offsetX / 2} ${
      offsetY - 100
    } ${offsetX} ${offsetY}")`;
    this.addToCartLayer.nativeElement.style.offsetPath = offsetPath;
    const addToCartAnimation = this.addToCartLayer.nativeElement.animate(
      [
        {
          offsetDistance: 0,
          offsetRotate: '0deg',
        },
        {
          offsetDistance: '100%',
          transform: 'scale(0,0)',
          offsetRotate: '0deg',
          opacity: 0,
        },
      ],
      {
        duration: 800,
        easing: 'ease-in-out',
        fill: 'none',
      }
    );
    addToCartAnimation.onfinish = () => {
      this.addToCartLayer.nativeElement.style.visibility = 'hidden';
      this.addToCartLayer.nativeElement.style.offsetDistance = 0;
      this._isAdding = false;
    };
  }

  noop(event): void {
    event.stopPropagation();
  }
}
