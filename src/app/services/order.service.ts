import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { operationProduct } from '../endpoint/endoint-product/url.operation-product';
import { operationOrder } from '../endpoint/endpoint-order/url.operation-order';
import { VolunteerDTO } from '../model/dtos/volunteerDTO';
import { Message } from '../model/message/message';
import { Order } from '../model/order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


public findAll():Observable<any[]>{
  return this.http.get<any[]>(operationOrder.findAll);
}

public findById(id:string):Observable<any>{
  return this.http.get<any>(operationOrder.findById+`${id}`);
}

public changeState(id:string, option: string):Observable<any>{
  return this.http.get<any>(operationOrder.changeState+operationOrder.pathState+`${id}`+operationOrder.pathOption+`${option}`);
}


public create(order: Order): Observable<Order>{
  return this.http.post<Order>(operationOrder.create, order);
}

public addVolunteer(idOrder: string, volunter: VolunteerDTO): Observable<Order>{
  return this.http.post<Order>(operationOrder.addVolunteer+`${idOrder}`, volunter);
}


//!ACA FALTA ADD PACKAGE

public addMessage(idOrder:string, message: Message):Observable<Order>{
  return this.http.post<Order>(operationOrder.addMessage+`${idOrder}`, message);
}

}
