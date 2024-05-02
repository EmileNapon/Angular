import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup} from '@angular/forms';
import{User} from './users/user';
import { CouleurAppareilComponent } from '../dossier/service/couleur.appareil.service';
@Component({
    selector:'forms',
    templateUrl:'./forms.html',
    standalone: true,
    imports: [ ReactiveFormsModule,CommonModule ],
})
export class FormsComponent implements OnInit {
  userForm! : FormGroup;
  l=[]
  constructor(private build: FormBuilder, private us :CouleurAppareilComponent){}
  ngOnInit(){
    this.l=this.us.userq
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
  const newus= new User(
    valeurForm['name'],valeurForm['second_name']
  )
  console.log(newus)
this.us.add(newus)

  
}
j(){
  console.log(this.l)
}
 
}