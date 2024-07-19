import { Component, OnInit } from '@angular/core';
import { ProductListServiceService } from 'src/app/services/product/product-list-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  listProducts: Array<any>=[]
  constructor(private sr:ProductListServiceService){

  }
  ngOnInit() {
    this.getData()
  }
  getData(){
    this.sr.getData().subscribe({
      next:data=>{ this.listProducts=data}, error:err=>{console.error('kkkk')}
      
    })
    
  }

}
