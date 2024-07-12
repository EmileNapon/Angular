import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { RouterModule } from '@angular/router';



     
@NgModule({
  declarations: [AppComponent],
  imports:[BrowserModule,AppRoutingModuleModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





