import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule,  FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import{User} from './users/user';
@Component({
    selector:'forms',
    templateUrl:'./forms.html',
    standalone: true,
    imports: [ ReactiveFormsModule,CommonModule ],
})
export class FormsComponent implements OnInit {
  userForm : any;
  constructor(private build: FormBuilder,private user:User){}
  ngOnInit(){
    this.iniForm();
  
  }
iniForm(){
  this.userForm=this.build.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    second_name:['',[Validators.required,Validators.minLength(5)]]
  })}

submit(){
  console.log(this.userForm.value);
  const valeurForm=this.userForm.value
}
}