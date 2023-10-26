import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteService } from '../teste-service/teste.service';
import { product } from '../interface-products/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teste04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste04.component.html',
  styleUrls: ['./teste04.component.scss'],
})
export class Teste04Component implements OnInit {
  product: product[] = [];
  private _http = inject(HttpClient);
  private _testeService = inject(TesteService);
  public getProducts$ = this._testeService.getProducts$;
  // public productsSubscription!: Subscription;

  // public getAllProductsService(): void {
  //   console.log('teste')
  //   this._testeService.getProductss().subscribe({
  //     next: (product) => {
  //       this.product = product;
  //     }
  //   })
  // }
  public ngOnInit(): void {
    this._testeService.getProducts();
  }

  // public getProducts(): void {
  //   this._testeService
  //     .getProductss()
  //     .subscribe((item) => {
  //       this.product = item;
  //     });
  // }
}
