import { __values } from "tslib";

export class AppareilService{
    contact=[{id:1,appareilName: 'machine a laver',appareilStatut:'eteint'},
        {id:2, appareilName : 'Television',appareilStatut:'eteint'},
        {id:3, appareilName: 'telephone',appareilStatut: 'allume'}]
AllumerAll(){
    for(let i of this.contact){
           i.appareilStatut='allume';
    }
        }
ToutEteindre(){
    for(let j of this.contact){
            j.appareilStatut='eteindre';
        }
    }
AllumerAppareil(index:number){
    this.contact[index].appareilStatut='allume';
    } 
eteindreAppareil(index:number){
    this.contact[index].appareilStatut='eteint';
}
getId(id:number){
    
}
}
