import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _stateSource$ = new BehaviorSubject<CartState>({
    products: [],
  });
  state$ = this._stateSource$.asObservable();

  addToCart(productToAdd: IProduct): void {
    const currentState = this._getCurrentState();
    const productCartIndex = currentState.products.findIndex(
      (product) => product.productId === productToAdd.productId
    );
    if (productCartIndex === -1) {
      this._stateSource$.next({
        ...currentState,
        products: [
          ...currentState.products,
          {
            ...productToAdd,
            count: 1,
          },
        ],
      });
    } else {
      this._stateSource$.next({
        ...currentState,
        products: [
          ...currentState.products.map((product, i) => {
            if (i === productCartIndex) {
              product.count += 1;
            }
            return product;
          }),
        ],
      });
    }
  }

  removeFromCart(productId: number): void {
    const currentState = this._getCurrentState();
    if (
      currentState.products.find((product) => product.productId === productId)
    ) {
      const products = currentState.products;
      products.splice(
        currentState.products.findIndex(
          (product) => product.productId === productId
        ),
        1
      );
      this._stateSource$.next({
        ...currentState,
        products: products,
      });
    }
  }

  clearCart(): void {
    this._stateSource$.next({
      ...this._getCurrentState(),
      products: [],
    });
  }

  selectProducts$(): Observable<IProduct[]> {
    return this.state$.pipe(map((state) => state.products));
  }

  selectTotalProductQuantity$(): Observable<number> {
    return this.state$.pipe(
      map((state) => state.products.reduce((acc, curr) => acc + curr.count, 0))
    );
  }

  selectTotalPrice$(): Observable<number> {
    return this.state$.pipe(
      map((state) =>
        state.products.reduce((acc, curr) => acc + curr.price * curr.count, 0)
      )
    );
  }

  private _getCurrentState(): CartState {
    return this._stateSource$.value;
  }
}

export interface CartState {
  products: ICartProduct[];
}

export interface ICartProduct extends IProduct {
  count: number;
}
