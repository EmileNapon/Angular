import {Component, Input} from '@angular/core';

@Component({
    selector: 'appareil-root',
    templateUrl: './appareil.component.html',
    styleUrls:['./appareil.component.css']
})

export class AppareilComponent {
   
    @Input() Appareils=[{
        appareilName:'machine a laver',
        appareilStatut:'eteint'
        
    }]

   @Input() val=''

}