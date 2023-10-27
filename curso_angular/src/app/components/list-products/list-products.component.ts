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
  private readonly _router = inject(Router);

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

  btnEdit(productsId: string) {
    this._router.navigate([`product/edit/${productsId}`]);
  }

}
