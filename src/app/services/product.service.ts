import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { operationProduct } from '../endpoint/endoint-product/url.operation-product';
import { Product } from '../model/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

/**GET ALL OPERATIONS */
public findAll():Observable<any[]>{
  return this.http.get<any[]>(operationProduct.findAll);
}

public findById(id:string):Observable<any>{
  return this.http.get<any>(operationProduct.findById+`${id}`);
}

public searchByName(name:string):Observable<any[]>{
  return this.http.get<any[]>(operationProduct.searchByName+`${name}`);
}


/**POST OPERATIONS */
public create (product: Product):Observable<Product>{
  return this.http.post<Product>(operationProduct.create, product);
}


/**PUT  OPERATIONS */
public update (id: string ,product: Product):Observable<Product>{
  return this.http.post<Product>(operationProduct.update+`${id}` , product);
}


}

