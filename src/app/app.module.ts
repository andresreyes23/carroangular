import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CartComponent } from './cart/cart.component';
import { CartsService } from './carts.service';
import { ProductcarComponent } from './productcar/productcar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductcarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductService,CartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
