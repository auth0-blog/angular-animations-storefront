import { Component } from '@angular/core';
import { BaseComponent, UIService } from '../../../../core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
})
export class OrderConfirmationComponent extends BaseComponent {
  constructor(private uiService: UIService) {
    super();
  }

  closeOrderConfirmation(): void {
    this.uiService.toggleOrderConfirmation(false);
  }

  noop(event) {
    event.stopPropagation();
  }
}
