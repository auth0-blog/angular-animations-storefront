import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  map,
  takeUntil,
  tap,
} from 'rxjs/operators';
import {
  BaseComponent,
  DataService,
  ProductType,
  UIService,
} from 'src/app/core';
import { ScaleFadeStagger, ScaleFade } from 'src/app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [ScaleFadeStagger, ScaleFade],
})
export class HomeComponent extends BaseComponent {
  products = null;
  selectedProductType$ = this.uiService.selectProductType$();
  productItems$ = combineLatest([
    this.dataService.getProducts$(),
    this.uiService.selectSearchQuery$(),
    this.selectedProductType$,
  ]).pipe(
    takeUntil(this.destroy$),
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
    }),
    distinctUntilChanged((prev, curr) => prev.length === curr.length),
    tap(() => (this.products = null)),
    delay(500),
    tap((products) => (this.products = products))
  );

  constructor(private dataService: DataService, private uiService: UIService) {
    super();
    this.productItems$.subscribe();
  }
}
