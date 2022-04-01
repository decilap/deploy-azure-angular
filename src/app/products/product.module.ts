import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from "./product-routing.module";
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BaskestComponent } from './baskest/baskest.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    BaskestComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule
  ]
})
export class ProductModule{}
