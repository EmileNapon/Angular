import { Component}  from '@angular/core'

@Component({
  selector:'contact',
  templateUrl:'./contact.component.html'  
})
export class ContactComponent{
    constructor(){}

    comments=[
        {name:'napon',prenom:'Emile',message:'bjr', date:new Date()},
        {name:'kabore',prenom:'Leticia',message:'oui bjr ! comment tu vas ?', date:new Date()},
        {name:'napon',prenom:'Emile',message:'Oui ca va !', date:new Date()},
    
    ]

personne=[
    {name:'napon',prenom:'Emile'},
    {name:'Kabore',prenom:'Leticia'}
]
}