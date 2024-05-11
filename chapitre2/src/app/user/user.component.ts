import{Component, OnInit} from '@angular/core'
import { UserService } from './userService/userService';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector:'user-root',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{

    public listUser:any

    constructor(private userservice:UserService, private fb:FormBuilder){}
    ngOnInit(): void {
     this.listUser=this.userservice.listUser  
     this.initForm() 
    }
    public myF!:FormGroup

    initForm(){
        this.myF=this.fb.group({
            contenu:'',
            ch:''
        })
    }
    onSubmit(){
        this.myF.value
        console.log(this.myF.value)
    }

}