import{Component, OnInit} from '@angular/core'
import { UserService } from './userService/userService';

@Component({
    selector:'user-root',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{

    public listUser:any

    constructor(private userservice:UserService){}
    ngOnInit(): void {
     this.listUser=this.userservice.listUser   
    }

}