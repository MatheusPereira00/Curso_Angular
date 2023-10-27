import { Injectable, inject } from '@angular/core';
import { ProductResponse } from '../interface/products';
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

  private http = inject(HttpClient);

  public getAllProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${environment.API}/products`);
  }

}
