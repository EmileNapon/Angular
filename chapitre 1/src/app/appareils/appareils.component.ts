import{Component, OnInit} from '@angular/core'
import { AppareilService } from './appareilsService/appareils.service'
import { ServiceColor } from './serviceColor/serviceColor'

@Component({
    selector:'appareil-root',
    templateUrl:'./appareils.component.html'
})

export class AppareilComponent implements OnInit{

    constructor(private appareilsService:AppareilService, private colorService: ServiceColor){

    }
    public appareils:any

    ngOnInit(){
        this.appareils=this.appareilsService.listappareils
    } 

   getColorService(color:string){
    return this.colorService.getColor(color)
   }

   onToutAllumer(){
    return this.appareilsService.ToutAllume()
   }

   ontToutEteindre(){
    return this.appareilsService.ToutEteindre()
   }
   testConsole(){
    console.log(this.appareils)
   }
}