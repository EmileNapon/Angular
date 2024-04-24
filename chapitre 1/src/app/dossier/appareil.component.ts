import {Component, Input, OnInit} from '@angular/core';
import { AppareilService } from './service/appareil.service';
import { CouleurAppareilComponent } from './service/couleur.appareil.service';

@Component({
    selector: 'appareil-root',
    templateUrl: './appareil.component.html',
    styleUrls:['./appareil.component.css']
})

export class AppareilComponent implements OnInit {
    appareils:any[]=[]
    appareils1:any[]=[]
    isAuth=false
    constructor(private service: AppareilService,  private servicecouleurAppareil: CouleurAppareilComponent){
      setTimeout(()=>{this.isAuth=true},4000);
    }

    ngOnInit(): void {
      this.appareils=this.service.contact;
    }

getCouleurText(statut: string){
    return this.servicecouleurAppareil.getColorText(statut);
  }
  getCouleurClass(statut:string){
    return this.servicecouleurAppareil.getColorClass(statut)
  }
  a(indice:number){
    this.service.AllumerAppareil(indice);
  }
  e(indice:number){
    this.service.eteindreAppareil(indice);
  }
}


