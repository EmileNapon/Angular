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
    this.iniForm();
    this.us.uh1
    this.us.uh2
    this.us.ug
    
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
// this.us.add(valeurForm['name'])
this.us.add1(valeurForm['name'])
this.us.add2(valeurForm['second_name'])
  
}
j(){
  console.log(this.us.uh1)
  console.log(this.us.uh2)
  console.log(this.us.ug.name[2])
  console.log(this.us.ug.second_name[2])
}

 
}