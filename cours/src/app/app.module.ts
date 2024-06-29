import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RootingModule } from './rooting.app.module';

import { Home } from './home/home.component';
import { Products } from './products/products.component';
import { newProduct } from './new product/newProduct.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products/ProductService/products.service';
import { ReactiveFormsModule } from '@angular/forms';


  const appRoutes:Routes=[
    {path:'', component: Home},
    {path:'products', component: Products},
    {path:'newProduct', component: newProduct}]


@NgModule({
  declarations: [AppComponent,Home,Products,newProduct],
  imports:[BrowserModule, RouterModule,RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

