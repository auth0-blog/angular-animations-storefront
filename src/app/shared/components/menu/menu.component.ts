import { Component } from '@angular/core';
import {
  BaseComponent,
  DataService,
  ProductType,
  UIService,
} from 'src/app/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent extends BaseComponent {
  productTypes$ = this.dataService.getProductTypes$();
  selectedProductType$ = this.uiService.selectProductType$();

  constructor(private dataService: DataService, private uiService: UIService) {
    super();
  }

  selectMenuItem(productType: ProductType): void {
    this.uiService.selectProductType(productType);
  }
}
