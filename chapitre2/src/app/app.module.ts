import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { UserService } from './user/userService/userService';
import { RouterModule,Routes } from '@angular/router';
import { MessageComponent } from './Message/message.component';
import { MessageService } from './Message/messageService/messageService';
import { PageAcceuil } from './pageAcceuil/pageAcceuil.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[{path:'',component:PageAcceuil},
{path:'home',component:AppComponent,children:[{path:'user', component:UserComponent},
{path:'message',component:MessageComponent}]}]

@NgModule({
  declarations: [
    PageAcceuil,AppComponent,UserComponent,MessageComponent
  ],
  imports: [BrowserModule,RouterModule.forRoot(routes), RouterModule, ReactiveFormsModule],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
