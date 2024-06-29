import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule} from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new product/new_product.component';
import { pageDeRoutingComponent } from './pageDeRouting/pageDeRouting.component';


const appRoutes:Routes=[{path:'', component : pageDeRoutingComponent},{path:'app', component : AppComponent, children:[
                        {path:'home', component : HomeComponent,},
                        {path:'products', component : ProductsComponent},
                        {path:'newProduct', component : NewProductComponent}]}]


@NgModule({
  declarations: [
    AppComponent, ProductsComponent, HomeComponent, NewProductComponent, pageDeRoutingComponent
  ],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
