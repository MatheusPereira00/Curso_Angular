import { product } from './../interface-products/products';
import { Injectable, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TesteService {
  public product: product[] = [];
  private apiURL = 'https://fakestoreapi.com/products';
  private _http = inject(HttpClient);

  private _getProductsSubject = new BehaviorSubject<product[]>([]);
  public readonly getProducts$ = this._getProductsSubject.asObservable();

  public getProducts(): void {
    this._http.get<product[]>(this.apiURL).subscribe(data => {
      this._getProductsSubject.next(data);
      console.log(this.getProducts$);
      // console.log(this._getProductsSubject.value);
    });
  }

  //  instanciando
  private messageSubject = new Subject<string>();
  private messageSubject02 = new Subject<string>();

  message$ = this.messageSubject.asObservable();
  message02$ = this.messageSubject02.asObservable();
  // expondo o observable (message$)  para que outros components possam escutar

  // enviarMessage(message: string) {
  //   this.messageSubject.next(message);
  // }

  // enviarMessage02(message02: string) {
  //   this.messageSubject02.next(message02);
  // }

  //  esse metodo permite que components possam enviar menssagens
  // next(message) enviar message para todos que estao escutando o message$

  private getRequestsSubject$ = new Subject<null>();
  public getRequests$ = this.getRequestsSubject$.asObservable();

  public getRequests(): void {
    this.getRequestsSubject$.next(null);
  }

  public getProductss(): Observable<product[]> {
    return this._http.get<product[]>(this.apiURL);
  }
}
