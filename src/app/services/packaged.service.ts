import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { operationStock } from '../endpoint/endpoint-stock/url.operation-stock';
import { operationPackaged } from '../endpoint/endpoit-packaged/url.operation-packaged';
import { Item } from '../model/packaged/item';
import { Packaged } from '../model/packaged/packaged';

@Injectable({
  providedIn: 'root'
})
export class PackagedService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(operationPackaged.findAll);
  }
  public findById(id: string): Observable<any> {
    return this.http.get<any>(operationPackaged.findById + `${id}`);
  }

  public findByDate(date: Date): Observable<any[]> {
    return this.http.get<any[]>(operationPackaged.findByDate + `${date}`);
  }

  public updateState(id: string, option: any): Observable<any[]> {
    return this.http.get<any>(operationPackaged.updateState + operationPackaged.pathUpdate + `${id}` + operationPackaged.pathOption + `${id}`);
  }


  //POST
  public create(packaged: Packaged): Observable<Packaged> {
    return this.http.post<Packaged>(operationPackaged.create, packaged);
  }
  public addItem(idPackaged: string, item: Item): Observable<Packaged> {
    return this.http.post<Packaged>(operationPackaged.addItem + `${idPackaged}`, item);
  }


  //DELETE
  public removeProduct(idPackaged: string, item: Item): Observable<any> {
    return this.http.delete(operationPackaged.delete+`${idPackaged}`,  { responseType: 'json' });
  } 
}
