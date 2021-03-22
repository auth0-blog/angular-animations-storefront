import { Component, Input } from '@angular/core';
import { BaseComponent, IProduct, UIService } from '../../../../core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent extends BaseComponent {
  @Input() product: IProduct;

  constructor(private uiService: UIService) {
    super();
  }

  closeProductDetails(): void {
    this.uiService.closeProductDetails();
  }

  noop(event) {
    event.stopPropagation();
  }
}
