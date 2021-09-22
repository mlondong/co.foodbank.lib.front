import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { operationMessage } from '../endpoint/endpoint-message/url.operation-message';
import { operationOrder } from '../endpoint/endpoint-order/url.operation-order';
import { Message } from '../model/message/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  public findAll():Observable<any[]>{
    return this.http.get<any[]>(operationMessage.findAll);
  }

  public findById(id:string):Observable<any>{
    return this.http.get<any>(operationMessage.findById+`${id}`);
  }

  public create(message: Message):Observable<Message>{
    return this.http.post<Message>(operationMessage.create, message );
  }


}
