import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()

export class ProductsService{
    constructor(private http:HttpClient){
}

    getData():Observable<any>{
       return this.http.get<Array<any>>("http://localhost:4201/products") 
    }
}