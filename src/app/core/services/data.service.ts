import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IProduct, IProductType } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProducts$(): Observable<IProduct[]> {
    return this.getData$(this._getUrl('assets/local-data/products.json')).pipe(
      map((res) => res.products)
    );
  }

  getProductTypes$(): Observable<IProductType[]> {
    return this.getData$(
      this._getUrl('assets/local-data/product-types.json')
    ).pipe(map((res) => res.productTypes));
  }

  getData$(path: string): Observable<any> {
    return this.http.get(path);
  }

  private _getUrl(path: string): string {
    return `${environment.baseUrl}/${path}`;
  }
}
