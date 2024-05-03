export class AppareilService{

public listappareils=[
    {appareilName:'Lumière', appareilStatut:'allume' },
    {appareilName:'climatisation',appareilStatut:'eteint'},
     {appareilName:'ordinateur', appareilStatut:'eteint'}];

 ToutAllume():void{
    for(let appareil of this.listappareils){
        if(appareil.appareilStatut=='eteint'){
            appareil.appareilStatut='allume'
        }
    }
}
 ToutEteindre():void{
    for(let appareil of this.listappareils){
        if(appareil.appareilStatut=='allume'){
            appareil.appareilStatut='eteint'
        }
}

}
}