import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Products } from "../products/products.component";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:"newProduct-root",
    templateUrl:"./newProduct.component.html"
})
export class newProduct implements OnInit {
    myF!:FormGroup
    ischecked1=true
    ischecked2=false
      
  
    constructor(private fb:FormBuilder, private http : HttpClient){}
    products:Array<any>=[]
    ngOnInit(): void {
        this.onFormInit()
    }

    onFormInit(){
       this.fb.group({
        name:this.fb.control(''),
        price:this.fb.control(0),
        checked:this.fb.control(true) 
       })
    }
saveProduct(){
    let products:any=this.myF
    const pr=products.value
    this.http.post<any>(`http://localhost:4201/products/${pr.id}`,pr).subscribe({
        next:p => alert(JSON.stringify(p)), 
        error:err=>console.log(err)
    })
}
checked(): Boolean{
    if(this.ischecked1==true){
        this.ischecked2=true;
    return !this.ischecked1
    }else{
        this.ischecked1=this.ischecked2
        return this.ischecked1
    }
}

 val=this.checked()
icon(){
    if (this.val==true){
        return 'bi bi-check'
    }
    else{
        return 'bi bi-circle'
    }
}
}