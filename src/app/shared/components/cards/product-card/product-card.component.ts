import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent, CartService, IProduct } from '../../../../core';
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

  constructor(private cartService: CartService) {
    super();
  }

  addToCart(selectedProduct: IProduct): void {
    this.cartService.addToCart(selectedProduct);

    this.addToCartLayer.nativeElement.style.visibility = 'visible';
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
    };
  }
}
