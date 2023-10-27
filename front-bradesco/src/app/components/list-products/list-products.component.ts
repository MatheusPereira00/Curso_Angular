import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/data-access/service/products.service';
import { Product } from 'src/app/data-access/interface/products';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  private readonly _productService = inject(ProductsService);

  public readonly products$ = this._productService.allProducts$;

  public products!: Product[];
  public searchForm = new FormGroup({
    search: new FormControl('')
  });

  public ngOnInit(): void {
    this._productService.getAllProducts();
  }

  public onSubmit(): void {
    this._productService.getSearchProducts(this.searchForm.controls['search'].value!);
  }
}
