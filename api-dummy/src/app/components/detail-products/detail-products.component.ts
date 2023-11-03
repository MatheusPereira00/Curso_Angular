import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { Product } from 'src/app/data-access/interface/products';
import { ProductsService } from 'src/app/data-access/service/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { take } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-products',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss'],
})
export class DetailProductsComponent implements OnInit {
  public product!: Product;
  public id!: string | null;

  private _productsService = inject(ProductsService);
  private _route = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.getProductById();
    this._productsService.getProductById(this.id).pipe(take(1)).subscribe(product => {
      this.product = product;
    });
  }

  public getProductById(): void {
    this._route.paramMap.pipe(take(1)).subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}
