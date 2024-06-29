import{Component, OnInit} from '@angular/core'
import { UserService } from './userService/userService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../Message/messageService/messageService';

@Component({
    selector:'user-root',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{

    public ListUser:any

    constructor(private userservice:UserService,private ms:MessageService, private fb:FormBuilder){}
    ngOnInit(): void {
     this.ListUser=this.userservice.listUser
     this.initFormMs() 
     this.ms.ContenuNapon
    }
    public myF!:FormGroup

    initFormMs(){
        this.myF=this.fb.group({
            ch1:['',Validators.required],
            contenu:['',Validators.required],
            ch2:['',Validators.required]
        })
    }

    onSubmit(){
        if(this.myF.value['ch1']=='Napon'){
            if(this.myF.value['ch2']=='Nacro'){
                this.ms.addNacro(this.myF.value['contenu'])
                console.log(this.ms.ContenuNacro)
            }
            if(this.myF.value['ch2']=='Kabore'){
                this.ms.addKabore(this.myF.value['contenu'])
                console.log(this.ms.ContenuKabore)
            }
            if(this.myF.value['ch2']=='Some'){
                this.ms.addSome(this.myF.value['contenu'])
                console.log(this.ms.ContenuSome)
            }
        }
          
        if(this.myF.value['ch1']=='Nacro'){
            if(this.myF.value['ch2']=='Napon'){
                this.ms.addNapon(this.myF.value['contenu'])
                console.log(this.ms.ContenuNapon)
             }
              if(this.myF.value['ch2']=='Kabore'){
                 this.ms.addKabore(this.myF.value['contenu'])
                 console.log(this.ms.ContenuKabore)
              }
              if(this.myF.value['ch2']=='Some'){
                 this.ms.addSome(this.myF.value['contenu'])
                 console.log(this.ms.ContenuSome)
              }
            }

        if(this.myF.value['ch1']=='Kabore'){
            if(this.myF.value['ch2']=='Napon'){
                this.ms.addNapon(this.myF.value['contenu'])
                console.log(this.ms.ContenuNapon)
             }
              if(this.myF.value['ch2']=='Nacro'){
                 this.ms.addNacro(this.myF.value['contenu'])
                 console.log(this.ms.ContenuNacro)
              }
              if(this.myF.value['ch2']=='Some'){
                 this.ms.addSome(this.myF.value['contenu'])
                 console.log(this.ms.ContenuSome)
              }
            }

        if(this.myF.value['ch1']=='Some'){
            if(this.myF.value['ch2']=='Napon'){
                this.ms.addNapon(this.myF.value['contenu'])
                console.log(this.ms.ContenuNapon)
             }
              if(this.myF.value['ch2']=='Nacro'){
                 this.ms.addNacro(this.myF.value['contenu'])
                 console.log(this.ms.ContenuNacro)
              }
              if(this.myF.value['ch2']=='Kabore'){
                 this.ms.addKabore(this.myF.value['contenu'])
                 console.log(this.ms.ContenuKabore)
              }
            }
        }
}