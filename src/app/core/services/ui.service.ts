import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct, ProductType } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UIService {
  private _stateSource$ = new BehaviorSubject<UIState>({
    // layers
    cartIsOpened: undefined,
    orderConfirmationIsOpened: undefined,
    productDetails: undefined,

    // filters
    searchQuery: '',
    productType: ProductType.explore,
  });
  state$ = this._stateSource$.asObservable();

  // Selects

  selectCart$(): Observable<boolean> {
    return this.state$.pipe(map((state) => state.cartIsOpened));
  }

  selectOrderConfirmation$(): Observable<boolean> {
    return this.state$.pipe(map((state) => state.orderConfirmationIsOpened));
  }

  selectProductDetails$(): Observable<IProduct> {
    return this.state$.pipe(map((state) => state.productDetails));
  }

  selectSearchQuery$(): Observable<string> {
    return this.state$.pipe(map((state) => state.searchQuery));
  }

  selectProductType$(): Observable<string> {
    return this.state$.pipe(map((state) => state.productType));
  }

  // Actions

  toggleCart(isOpened: boolean): void {
    this._stateSource$.next({
      ...this._getCurrentState(),
      cartIsOpened: isOpened,
    });
  }

  toggleOrderConfirmation(isOpened: boolean): void {
    this._stateSource$.next({
      ...this._getCurrentState(),
      orderConfirmationIsOpened: isOpened,
    });
  }

  viewProductDetails(product: IProduct): void {
    this._stateSource$.next({
      ...this._getCurrentState(),
      productDetails: product,
    });
  }

  closeProductDetails(): void {
    this._stateSource$.next({
      ...this._getCurrentState(),
      productDetails: null,
    });
  }

  search(keyword: string): void {
    this._stateSource$.next({
      ...this._getCurrentState(),
      searchQuery: keyword,
    });
  }

  selectProductType(productType: ProductType): void {
    this._stateSource$.next({
      ...this._getCurrentState(),
      productType: productType,
    });
  }

  // Current Value

  selectCartCurrentValue(): boolean {
    return this._getCurrentState().cartIsOpened;
  }

  selectOrderConfirmationCurrentValue(): boolean {
    return this._getCurrentState().orderConfirmationIsOpened;
  }

  productDetailsCurrentValue(): IProduct {
    return this._getCurrentState().productDetails;
  }

  private _getCurrentState(): UIState {
    return this._stateSource$.value;
  }
}

export interface UIState {
  // layers
  cartIsOpened: boolean;
  orderConfirmationIsOpened: boolean;
  productDetails: IProduct;

  // filters
  searchQuery: string;
  productType: ProductType;
}
