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


uh1=['']
uh2=['']
add1(us1:string){
     this.uh1.push(us1)
     
}
add2(us2:any){
    this.uh2.push(us2)
}
ug={name:this.uh1, second_name:this.uh2}
}
    