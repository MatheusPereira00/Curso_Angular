import { Injectable, inject } from '@angular/core';
import { Product, ProductResponse } from '../interface/products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public product!: Product;

  private _http = inject(HttpClient);
  private _ProductByIdSubject$ = new BehaviorSubject<Product>(this.product);
  private _allProductsSubject$ = new BehaviorSubject<Product[]>([]);

  public readonly allProducts$: Observable<Product[]> = this._allProductsSubject$.asObservable();
  public readonly productsById$: Observable<Product[]> = this._allProductsSubject$.asObservable();

  public getAllProducts(): void {
    this._http.get<ProductResponse>(`${environment.API}/products`)
    .pipe(
      take(1),
      tap((response) => {
        const products = response.products;
        this._allProductsSubject$.next(products);
      })
    )
    .subscribe();
  }

  // public getProductById(id: string | null): void {
  //   let url = `${environment.API}/${id}`
  //   this._http.get<Product>(url).pipe(take(1)).subscribe(response => {
  //     this._ProductByIdSubject$.next(response);
  //   })
  // }

  public getProductById(id: string | null): Observable<Product[]> {
    let url = `${environment.API}/${id}`
    url += `?id=${id}`;
    return this._http.get<Product[]>(url);
  }
}
