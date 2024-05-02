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
userq=[];
add(us1:any){
     this.userq=us1.push
}
add2(us2:any){
    this.userq=us2.push
}
}