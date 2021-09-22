import { Injectable, Provider } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { operationVault } from '../endpoint/endpoint-vault/url.operation-vault';
import { DetailContribution } from '../model/vault/detailContribution';
import { GeneralContribution } from '../model/vault/generalContribution';
import { Vault } from '../model/vault/vault';

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
    return this.http.get<any[]>(operationVault.findByContact + `${contact}`);
  }

  public findByDistrict(district: any): Observable<any[]> {
    return this.http.get<any[]>(operationVault.findDistrict + `${district}`);
  }

  public findById(id: any): Observable<any> {
    return this.http.get<any>(operationVault.findId + `${id}`);
  }



  /*All operations POST*/
  public addDetailContribution(id: any, detailContribution: DetailContribution): Observable<DetailContribution> {
    return this.http.post<DetailContribution>(operationVault.createDetailContribution + `${id}`, detailContribution);
  }

  public addGeneralContribution(id: any, generalContribution: GeneralContribution): Observable<GeneralContribution> {
    return this.http.post<GeneralContribution>(operationVault.createGeneralContribution+`${id}`, generalContribution);
  }



  /*All operations PUT*/
  public updateVault(id: any, vault: Vault): Observable<Vault> {
    return this.http.put<Vault>(operationVault.updateVault+`${id}`, vault);
  }

}
