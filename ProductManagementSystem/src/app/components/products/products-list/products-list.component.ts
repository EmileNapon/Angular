import { Component, OnInit } from '@angular/core';
import { ProductListServiceService } from 'src/app/services/product/product-list-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
 n:number[]=[]
  public listProducts:Array<any>=[]
    constructor(private sr: ProductListServiceService ){}

  ngOnInit(): void {

    this.getDb() 
  }
  getDb(){
    this.sr.getData().subscribe({
      next:data=>{ this.listProducts=data}, error:err=>{console.error('kkkk')}
    })
  }
}
