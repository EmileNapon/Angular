import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
  
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector:'forms',
    templateUrl:'./forms.html',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule]
})
export class FormsComponent{
    klform = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        body: new FormControl('', Validators.required)
      });
        
      get f(){
        return this.klform.controls;
      }
        
      submit(){
        console.log(this.klform.value);
      }

}