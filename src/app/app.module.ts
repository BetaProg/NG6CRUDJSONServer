import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';


import {RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UpdateProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:"", component:LoginComponent},
      {path:"login", component:LoginComponent},
      {path:"home", component:HomeComponent},
      {path:"product", component:ProductsComponent},
      {path:"updateProduct/:id", component:UpdateProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }