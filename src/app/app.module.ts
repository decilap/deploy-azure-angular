import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoaderComponent} from "./loader/loader.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {HeaderComponent} from "./layouts/header/header.component";
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {LoaderService} from "./service/loader-service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
