import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import{AppareilComponent} from './dossier/appareil.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,AppareilComponent,ContactComponent
    
   
  ],
  imports: [BrowserModule, FormsModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
