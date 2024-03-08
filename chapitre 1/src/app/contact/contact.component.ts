import { Component, Input }  from '@angular/core'

@Component({
    selector: "contact-root",
    templateUrl: "./contact.component.html",
    styleUrls:['./contact.component.css']
})

export class ContactComponent{


infos=[{last_name:'NAPON', second_name:'Emile',tel:'+226 63 09 31 31',niveau_etude:'Master 2'},
       {last_name:'KABORE',second_name:'Leticia',tel:'+226 54 - - - -',niveau_etude:'3ieme'
}];

comments=[{date:new Date(),message: ''},{date:new Date(),message: ''}];
  
comment=[{date:new Date(),message: 'boojour Emile'},{date:new Date(),message: 'Oui Bonjour Leticia'}]

constructor(){
    setTimeout(()=>{this.comments=this.comment}, 4000)   
}
onAffiche(){
    console.log(this.comment)
}

}