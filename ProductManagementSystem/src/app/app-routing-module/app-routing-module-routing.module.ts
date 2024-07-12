import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from '../components/products/products-list/products-list.component';
import { ProductsDetailComponent } from '../components/products/products-detail/products-detail.component';
import { AppComponent } from '../app.component';

const routes: Routes = [{path:'appareils', component:ProductsListComponent},
                        {path:'appareil/:id', component:ProductsDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleRoutingModule { }
