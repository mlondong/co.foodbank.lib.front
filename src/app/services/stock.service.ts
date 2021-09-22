import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { operationStock } from '../endpoint/endpoint-stock/url.operation-stock';
import { Stock } from '../model/stock/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  /*All operations GET*/
  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(operationStock.findAll);
  }

  public findById(id: string): Observable<any> {
    return this.http.get<any>(operationStock.findById + `${id}`);
  }
  public findContributionInStock(id: string): Observable<any[]> {
    return this.http.get<any[]>(operationStock.findContributionInStock + `${id}`);
  }

  public findProductInStock(id: string): Observable<any[]> {
    return this.http.get<any[]>(operationStock.findProductInStock + `${id}`);
  }

  public searchProduct(product: string): Observable<any[]> {
    return this.http.get<any[]>(operationStock.searchProduct + `${product}`);
  }


    /*All operations POST*/

    public createStock(stock: Stock){
      return this.http.post<Stock>(operationStock.create, stock);
    }


     /*All operations PUT*/
     public updateStock(id:string, stock: Stock){
      return this.http.put<Stock>(operationStock.update+`${id}`, stock);
    }


}
