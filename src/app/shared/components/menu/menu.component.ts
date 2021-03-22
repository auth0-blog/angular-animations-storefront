import { Component } from '@angular/core';
import {
  animate,
  animation,
  style,
  state,
  transition,
  trigger,
} from '@angular/animations';
import {
  BaseComponent,
  DataService,
  ProductType,
  UIService,
} from '../../../core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  animations: [
    trigger('menuOptionsBackground', [
      state('DEFAULT', style({ backgroundColor: 'transparent' })),
      state('ACTIVE', style({ backgroundColor: '#93C5FE' })),
      transition('* => *', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class MenuComponent extends BaseComponent {
  productTypes$ = this.dataService.getProductTypes$();
  selectedProductType$ = this.uiService.selectProductType$();
  animated$ = this.uiService.selectAnimated$();
  constructor(private dataService: DataService, private uiService: UIService) {
    super();
  }

  selectMenuItem(productType: ProductType): void {
    this.uiService.selectProductType(productType);
  }
}
