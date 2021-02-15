import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService, ProductType, UIService } from '../../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  selectedProductType$ = this.uiService.selectProductType$();
  productItems$ = combineLatest([
    this.dataService.getProducts$(),
    this.uiService.selectSearchQuery$(),
    this.selectedProductType$,
  ]).pipe(
    map(([products, keyword, productType]) => {
      if (productType && productType !== ProductType.explore) {
        products = products.filter((product) => product.type === productType);
      }
      if (keyword) {
        products = products.filter((product) =>
          product.title.toLowerCase().includes(keyword.toLowerCase())
        );
      }
      return products;
    })
  );

  constructor(private dataService: DataService, private uiService: UIService) {}
}
