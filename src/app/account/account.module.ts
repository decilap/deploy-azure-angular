import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AccountComponent } from './account.component';
import {AccountRoutingModule} from "./account-routing.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ResetPasswordComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule
  ]
})
export class AccountModule { }
