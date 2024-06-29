import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SocieteService } from './societe/SocieteService/societe.service';
import { SocieteComponent } from './societe/societe.component';


@NgModule({
  declarations: [AppComponent,SocieteComponent],

  imports:[BrowserModule],
  providers: [SocieteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
