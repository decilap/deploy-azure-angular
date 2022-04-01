import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', component: DefaultLayoutComponent,
    children: [
      { path: '',   redirectTo: '/', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
      },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
