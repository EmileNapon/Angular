export class SocieteService{
    listeSociete=["Assurance vie", "VimSo Assurance sante", "Senou Assurance", "Coris Assurance"]

    Modifier(nom: string){
        for (let i=0; i<this.listeSociete.length;i++){
            if( this.listeSociete[i]!=nom){
               this.listeSociete.push(nom)
            } 
        }
    }
}