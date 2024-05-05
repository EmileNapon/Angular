import{Component, OnInit} from '@angular/core'
import { AppareilService } from './appareilsService/appareils.service'
import { ServiceColor } from './serviceColor/serviceColor'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
    selector:'appareil-root',
    templateUrl:'./appareils.component.html'
})

export class AppareilComponent implements OnInit{

    constructor(private appareilsService:AppareilService, private colorService: ServiceColor, private fb: FormBuilder){

    }
    public appareils:any

    ngOnInit(){
        this.appareils=this.appareilsService.listappareils
        this.initForm()
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

   allumeAppareilseul(index:number){
      return this.appareilsService.allumeAppareil(index)
   }

   eteindreAppareilseul(index:number){
    return this.appareilsService.eteindreAppareil(index)

   }
   testConsole(){
    console.log(this.appareils)
   }

   public myF!:FormGroup

   initForm(){
    this.myF=this.fb.group({
        newAppareil:''
    })
   }

onsubmit(){
    console.log(this.myF.value)
}


}