import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountComponent} from "./account.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";

const routes: Routes = [
  { path: '', component: AccountComponent,
      children: [
        {
          path: 'signin', // child route path
          component: SigninComponent
        },
        {
          path: 'signup', // child route path
          component: SignupComponent
        },
        {
          path: 'reset-password', // child route path
          component: ResetPasswordComponent
        }
      ]
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
export class AccountRoutingModule { }
