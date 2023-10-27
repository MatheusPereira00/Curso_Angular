import { Routes } from "@angular/router";
import { ListProductsComponent } from "./components/list-products/list-products.component";
import { DetailProductsComponent } from "./components/detail-products/detail-products.component";

export const productsRoutes: Routes = [
    {
      path: '',
      component: ListProductsComponent,
    },
    {
      path: 'details/:id',
      component: DetailProductsComponent,
    },
  ];