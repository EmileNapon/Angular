import{Component, OnInit} from '@angular/core'
import { UserService } from './userService/userService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../Message/messageService/messageService';

@Component({
    selector:'user-root',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{

    public listUser:any

    constructor(private userservice:UserService,private ms:MessageService, private fb:FormBuilder){}
    ngOnInit(): void {
     this.listUser=this.userservice.listUser
     this.initFormNapon() 
     this.initFormNacro()
     this.initFormKabore()
     this.initFormSome()
     this.ms.ContenuNapon
    }
    public myFNapon!:FormGroup
    public myFNacro!:FormGroup
    public myFKabore!:FormGroup
    public myFSome!:FormGroup

    initFormNapon(){
        this.myFNapon=this.fb.group({
            contenu:'',
            ch:''
        })
    }
    initFormNacro(){
        this.myFNacro=this.fb.group({
            contenu:'',
            ch:''
        })
    }
    initFormKabore(){
        this.myFKabore=this.fb.group({
            contenu:'',
            ch:''
        })
    }
 
    initFormSome(){
        this.myFSome=this.fb.group({
            contenu:'',
            ch:''
        })
    }



    onSubmitNapon(){
        if(this.myFNapon.value['ch']=='Napon'){
           this.ms.addNapon(this.myFNapon.value['contenu'])
           console.log(this.ms.ContenuNapon)
        }

        if(this.myFNapon.value['ch']=='Nacro'){
            this.ms.addNacro(this.myFNapon.value['contenu'])
            console.log(this.ms.ContenuNacro)
         }
         if(this.myFNapon.value['ch']=='Kabore'){
            this.ms.addKabore(this.myFNapon.value['contenu'])
            console.log(this.ms.ContenuKabore)
         }
         if(this.myFNapon.value['ch']=='Some'){
            this.ms.addSome(this.myFNapon.value['contenu'])
            console.log(this.ms.ContenuSome)
         }
    }

    onSubmitNacro(){
        if(this.myFNacro.value['ch']=='Napon'){
            this.ms.addNapon(this.myFNacro.value['contenu'])
            console.log(this.ms.ContenuNapon)
         }
 
         if(this.myFNacro.value['ch']=='Nacro'){
             this.ms.addNacro(this.myFNacro.value['contenu'])
             console.log(this.ms.ContenuNacro)
          }
          if(this.myFNacro.value['ch']=='Kabore'){
             this.ms.addKabore(this.myFNacro.value['contenu'])
             console.log(this.ms.ContenuKabore)
          }
          if(this.myFNacro.value['ch']=='Some'){
             this.ms.addSome(this.myFNacro.value['contenu'])
             console.log(this.ms.ContenuSome)
          }
    }

    onSubmitKabore(){
        if(this.myFKabore.value['ch']=='Napon'){
            this.ms.addNapon(this.myFKabore.value['contenu'])
            console.log(this.ms.ContenuNapon)
         }
 
         if(this.myFKabore.value['ch']=='Nacro'){
             this.ms.addNacro(this.myFKabore.value['contenu'])
             console.log(this.ms.ContenuNacro)
          }
          if(this.myFKabore.value['ch']=='Kabore'){
             this.ms.addKabore(this.myFKabore.value['contenu'])
             console.log(this.ms.ContenuKabore)
          }
          if(this.myFKabore.value['ch']=='Some'){
             this.ms.addSome(this.myFKabore.value['contenu'])
             console.log(this.ms.ContenuSome)
          }
    }

    onSubmitSome(){
        if(this.myFSome.value['ch']=='Napon'){
            this.ms.addNapon(this.myFSome.value['contenu'])
            console.log(this.ms.ContenuNapon)
         }
 
         if(this.myFSome.value['ch']=='Nacro'){
             this.ms.addNacro(this.myFSome.value['contenu'])
             console.log(this.ms.ContenuNacro)
          }
          if(this.myFSome.value['ch']=='Kabore'){
             this.ms.addKabore(this.myFSome.value['contenu'])
             console.log(this.ms.ContenuKabore)
          }
          if(this.myFSome.value['ch']=='Some'){
             this.ms.addSome(this.myFSome.value['contenu'])
             console.log(this.ms.ContenuSome)
          }
    }

}