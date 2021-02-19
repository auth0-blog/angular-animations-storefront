import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { UIService } from './core';
import { bounceIn, bounceOut, SlideRight } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    SlideRight,
    trigger('bounce', [
      transition(
        'void => *',
        useAnimation(bounceIn, {
          params: { timing: 0.7 },
        })
      ),
      transition(
        '* => void',
        useAnimation(bounceOut, {
          params: { timing: 0.6 },
        })
      ),
    ]),
  ],
})
export class AppComponent {
  title = 'auth0-ecommerce';
  cartIsOpened$ = this.uiService.selectCart$();
  orderConfirmationIsOpened$ = this.uiService.selectOrderConfirmation$();
  productDetails$ = this.uiService.selectProductDetails$();

  constructor(private uiService: UIService) {}

  closeAllLayers() {
    if (this.uiService.selectCartCurrentValue()) {
      this.uiService.toggleCart(false);
    }
    if (this.uiService.selectOrderConfirmationCurrentValue()) {
      this.uiService.toggleOrderConfirmation(false);
    }
    if (this.uiService.productDetailsCurrentValue()) {
      this.uiService.closeProductDetails();
    }
  }
}
