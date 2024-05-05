import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppareilComponent } from './appareils/appareils.component';
import { PageAcceuil } from './pageAcceuil/pageAcceuil.component';
import { AppareilService } from './appareils/appareilsService/appareils.service';
import { ServiceColor } from './appareils/serviceColor/serviceColor';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
  const appRoutes:Routes=[
    {path:'', component:PageAcceuil ,children:[
      {path:'home', component: AppComponent},
      {path:'appareils', component: AppareilComponent}]}]

@NgModule({
  declarations: [
    AppComponent, AppareilComponent,PageAcceuil
  ],
  imports: [BrowserModule, RouterModule,RouterModule.forRoot(appRoutes), FormsModule],
  providers: [AppareilService,ServiceColor],
  bootstrap: [AppComponent]
})
export class AppModule { }
