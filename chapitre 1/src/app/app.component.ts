import { Component, Input, OnInit} from '@angular/core';
import { AppareilService } from './dossier/service/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {Title=[{title:''}]
isAuth=false;
l='appareil'
appareils:any[]=[] 
constructor(private service: AppareilService, private j: ActivatedRoute){
  setTimeout(()=>{this.isAuth=true}, 5000)
 } 
 ngOnInit(){
  this.appareils=this.service.contact; 
  this.l=this.j.snapshot.params['id'] ;                     
 }
 ngToutAllumer(){
  this.service.AllumerAll();
}
ngToutEteindre(){
  this.service.ToutEteindre() ;
}



comments=[
  {message:'bjr', date:new Date()},
  {message:'oui bjr ! comment tu vas ?', date:new Date()},
  {message:'Oui ca va !', date:new Date()},

]

}
