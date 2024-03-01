import {Component, Input} from '@angular/core';

@Component({
    selector: 'appareil-root',
    templateUrl: './appareil.component.html',
    styleUrls:['./appareil.component.css']
})

export class AppareilComponent {

    @Input()appareilName='television';
    appareilStatut='eteint';
    appareilName1='television';
    appareilStatut1='eteint';
    @Input() time=4000;
    @ Input()appareils=''
    @ Input()getAppareilName1(){
        return this.appareilName1='4k';
    }
    getAppareilStatut1(){
        return this.appareilStatut1="true";
    }
    isAuth=false;
    constructor(){
        setTimeout(()=>{this.isAuth=true}, this.time)
    }
    @Input()onAppareilAllumer(){
        if(this.appareilName=='television'){
            console.log('llllllll')
        }
        
    }
    
}