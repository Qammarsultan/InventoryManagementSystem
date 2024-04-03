import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path : "addProduct", component :AddProductsComponent },
  {path : "productList", component :ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
