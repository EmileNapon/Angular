export class MessageService{
    public date = new Date()
    public ContenuNapon =[{}]
    public ContenuNacro =[{}]
    public ContenuKabore =[{}]
    public ContenuSome =[{}]

    addNapon(contenu:string){
         this.ContenuNapon.push(contenu)
    }
    addNacro(contenu:string){
        this.ContenuNacro.push(contenu)
   }
   addKabore(contenu:string){
    this.ContenuKabore.push(contenu)
   }
   addSome(contenu:string){
    this.ContenuSome.push(contenu)
     }
}