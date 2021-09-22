import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { operationContribution } from '../endpoint/endpoint-contribution/url.operation-contribution';
import { DetailContribution } from '../model/vault/detailContribution';
import { GeneralContribution } from '../model/vault/generalContribution';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  constructor(private http: HttpClient) { }


  /*All operations GET*/
  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(operationContribution.findAll);
  }

  public findByCodeBarAll(codeBar: string): Observable<any[]> {
    return this.http.get<any[]>(operationContribution.findByCode + `${codeBar}`);
  }

  public findById(id: string): Observable<any[]> {
    return this.http.get<any[]>(operationContribution.findById + `${id}`);
  }

  public updateState(idContribution: string, option: any) {
    return this.http.get<any>(operationContribution.updateState +
      operationContribution.pathIdState + `${idContribution}` + operationContribution.pathOption + `${option}`);
  }


  /*All operations PUT*/
  public updateDetailContribution(id: string, detailContribution: DetailContribution): Observable<DetailContribution> {
    return this.http.put<DetailContribution>(operationContribution.updateDetailContribution + `${id}`, detailContribution);
  }

  public updateGeneralContribution(id: string, generalContribution: GeneralContribution): Observable<GeneralContribution> {
    return this.http.put<GeneralContribution>(operationContribution.updateGeneralContribution + `${id}`, generalContribution);
  }


  /*All operations POST*/
  /*ALL OPERATIONS TO CREATE CONTRIBUTION IS HANDLE BY VAULT SERVICE*/

}
