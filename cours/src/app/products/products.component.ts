import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./ProductService/products.service";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:"products-root",
    templateUrl:"./products.component.html"
})
export class Products implements OnInit{
    constructor( private http:HttpClient){}
    products:Array<any>=[]
    vall=true
    ngOnInit(): void {  
      this.http.get<Array<any>>("http://localhost:4201/products") 
      .subscribe({
        next:p=>{
            this.products=p
        },
        error:err=>{console.log(err)}
    })
            
    }

    public Columns=['nomProduit','price','ckecked']
    change(val: any){
        val.checked=!val.checked;
     }
    statut(checked:any){
      if(checked==false){
        return 'bi bi-circle'
      }else{
        return 'bi bi-check'
      }
    }

    
}