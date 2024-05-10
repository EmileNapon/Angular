export class AppareilService{

public listappareils=[
    {appareilName:'Lumière', appareilStatut:'allume' },
    {appareilName:'climatisation',appareilStatut:'eteint'},
    {appareilName:'ordinateur', appareilStatut:'eteint'}];
newlistappareil=['']
allumeAppareil(index1:number){
    if(this.listappareils[index1].appareilStatut=='eteint'){
        this.listappareils[index1].appareilStatut='allume'
    }

}
eteindreAppareil(index2:number){
        if(this.listappareils[index2].appareilStatut=='allume'){
        this.listappareils[index2].appareilStatut='eteint'
    }

}
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

add(newApp:any){
    this.newlistappareil.push(newApp)
}
}