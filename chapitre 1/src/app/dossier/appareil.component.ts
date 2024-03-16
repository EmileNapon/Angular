import {Component, Input} from '@angular/core';

@Component({
    selector: 'appareil-root',
    templateUrl: './appareil.component.html',
    styleUrls:['./appareil.component.css']
})

export class AppareilComponent {
  
   
    appareils=[{
        appareilName:'Machine a laver',
        appareilStatut:'allume'
         },{
        appareilName:'Television',
        appareilStatut:'allume'
        },{
        appareilName:'Ordinateur',
        appareilStatut:'eteint'
    }]   
getColor(v:string){
     if(v=='eteint'){return 'red';} else if( v=="allume"){return "green"} else{return ''}}
}

