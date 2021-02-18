import { Component } from '@angular/core';
import { UIService } from './core';
import { SlideRight } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [SlideRight],
})
export class AppComponent {
  title = 'auth0-ecommerce';
  cartIsOpened$ = this.uiService.selectCart$();
  orderConfirmationIsOpened$ = this.uiService.selectOrderConfirmation$();

  constructor(private uiService: UIService) {}

  closeAllLayers() {
    if (this.uiService.selectCartCurrentValue()) {
      this.uiService.toggleCart(false);
    }
    if (this.uiService.selectOrderConfirmationCurrentValue()) {
      this.uiService.toggleOrderConfirmation(false);
    }
  }
}
