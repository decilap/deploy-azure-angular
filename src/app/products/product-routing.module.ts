import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {BaskestComponent} from "./baskest/baskest.component";
import {CheckoutComponent} from "./checkout/checkout.component";
const routes: Routes = [
  { path: '', component: ProductComponent,
      children: [
        {
          path: '', // child route path
          component: ProductListComponent
        },
        {
          path: 'product/:slug', // child route path
          component: ProductDetailsComponent
        },
        {
          path: 'cart/view', // child route path
          component: BaskestComponent
        },
        {
          path: 'checkout', // child route path
          component: CheckoutComponent
        }
      ],
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: []
})
export class ProductRoutingModule { }
