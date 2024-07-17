import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'


     
@NgModule({
  declarations: [AppComponent],
  imports:[BrowserModule,AppRoutingModuleModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





