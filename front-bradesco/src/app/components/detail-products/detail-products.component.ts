import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/data-access/interface/products';
import { ProductsService } from 'src/app/data-access/service/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss'],
})
export class DetailProductsComponent implements OnInit {
  public products: Product[] = [];
  public id!: string | null;

  private _productsService = inject(ProductsService);
  private _route = inject(ActivatedRoute);

  public productsById$ = this._productsService.productsById$;

  // ngOnInit(): void {
  //     this._productsService.getProductById(this.id);
  // }

  public ngOnInit(): void {
    // this.getParamsByRouter();
    // this.getProductsById();
    this._productsService.getProductById(this.id);
  }

  public getProductsById(): void {
    this._productsService.getProductById((this.id)).subscribe(productsById => {
      this.products = productsById;
    });
  }

  public getParamsByRouter(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}
