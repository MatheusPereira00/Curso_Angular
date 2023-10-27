import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/data-access/service/products.service';
import { Product } from 'src/app/data-access/interface/products';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  public products!: Product[];

  private readonly _productService = inject(ProductsService);
  public readonly products$ = this._productService.allProducts$;

  public ngOnInit(): void {
    this._productService.getAllProducts()
  }

}
