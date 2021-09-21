import { Injectable, Provider } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { operationVault } from '../endpoint/endpoint-vault/url.operation-vault';

@Injectable({
  providedIn: 'root'
})
export class VaultService {

  constructor(private http: HttpClient) {
  }

  /*All operations GET*/
  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(operationVault.findAll);
  }
  public findByContact(contact: any): Observable<any[]> {
    return this.http.get<any[]>(operationVault.findByContact+`${contact}`);
  }

  public findByDistrict(district: any): Observable<any[]> {
    return this.http.get<any[]>(operationVault.findDistrict+`${district}`);
  }

  public findById(id: any): Observable<any> {
    return this.http.get<any>(operationVault.findId +`${id}`);
  }

 /*All operations POST*/
  
 /*All operations PUT*/


}
