import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/data-access/service/products.service';
import { Product } from 'src/app/data-access/interface/products';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  private readonly _productService = inject(ProductsService);
  public products!: Product[];

  public ngOnInit(): void {
    this.getAllProductsService();
  }

  public getAllProductsService(): void {
    this._productService.getAllProducts().subscribe({
      next: (productsList) => {
        this.products = productsList.products;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
