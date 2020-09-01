import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent } from './product/product.component';
import {CartComponent } from './cart/cart.component';
import { ProductcarComponent } from './productcar/productcar.component';
const routes: Routes = [{path: 'products', component: ProductComponent},{path: 'productcar', component: ProductcarComponent},{path: 'carts', component: CartComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
