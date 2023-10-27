import { Injectable, inject } from '@angular/core';
import { Product, ProductResponse } from '../interface/products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private apiURL = 'https://fakestoreapi.com/products';
  // private _http = inject(HttpClient);

  // private _getAllProductsSubject = new BehaviorSubject<Products[]>([]);
  // public readonly getAllProducts$ = this._getAllProductsSubject.asObservable();

  // public getAllProducts(): void {
  //   this._http.get<Products[]>(this.apiURL).subscribe(data => {
  //     this._getAllProductsSubject.next(data);
  //   });
  // }

  private _http = inject(HttpClient);

  public getAllProducts(): Observable<ProductResponse> {
    return this._http.get<ProductResponse>(`${environment.API}/products`);
  }

  public getProductById(id: string): Observable<Product[]> {
    let url = `${environment.API}/products`;
    url += `?id=${id}`;
    return this._http.get<Product[]>(url);
  }

  // public getProductById(id: string | null): Observable<Product> {
  //   return this._http.get<Product>(`${environment.API}/products/${id}`);
  // }

}
