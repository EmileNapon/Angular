import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import{AppareilComponent} from './dossier/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './dossier/service/appareil.service';
import { CouleurAppareilComponent } from './dossier/service/couleur.appareil.service';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HComponent } from './contact/h';
import { FormsComponent } from './forms/forms';

const appRoutes:Routes=[{path:'contact',component:ContactComponent},{path:'appareil/:id',component:AppareilComponent},{path:'fo',component:FormsComponent}]
@NgModule({
  declarations: [
    AppComponent,AppareilComponent, ContactComponent, HComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)

],
  providers: [AppareilService, CouleurAppareilComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
