export class CouleurAppareilComponent{
    getColorText(appareilStatut: string){
        if(appareilStatut=='allume'){
            return 'green'
        }else {
        return 'red'
        }
}
 getColorClass(appareilStatut: string){
        if(appareilStatut=='allume'){
            return 'allume'
        }else if(appareilStatut=='eteint'){
        return 'eteint'
        }else{return'';}

}


}