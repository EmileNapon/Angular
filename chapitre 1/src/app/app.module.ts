import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppareilComponent } from './appareils/appareils.component';
import { PageAcceuil } from './pageAcceuil/pageAcceuil.component';
import { AppareilService } from './appareils/appareilsService/appareils.service';
import { ServiceColor } from './appareils/serviceColor/serviceColor';

  const appRoutes:Routes=[{path:'home', component:AppComponent,children:[{path:'', component: PageAcceuil},{path:'appareils', component: AppareilComponent}]}]
@NgModule({
  declarations: [
    AppComponent, AppareilComponent,PageAcceuil
  ],
  imports: [BrowserModule, RouterModule,RouterModule.forRoot(appRoutes)],
  providers: [AppareilService,ServiceColor],
  bootstrap: [AppComponent]
})
export class AppModule { }
