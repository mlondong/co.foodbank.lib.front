import { Injectable, Provider } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { operationUser } from '../endpoint/endpoint-user/url.operation-user';
import { Beneficiary } from '../model/user/beneficiary';
import { Volunteer } from '../model/user/volunteer';
import { Providerr } from '../model/user/provider';


@Injectable({
  providedIn: 'root'
})


/* Class Service to handle all operations in user.
   const : operationUser  containt all endpoints.
*/
export class UserService {

  constructor(private http: HttpClient) {
  }


  /*All operations GET*/
  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(operationUser.findAll);
  }
  public findUserById(userId: String): Observable<any> {
    return this.http.get<any>(operationUser.findById + `${userId}`);
  }
  public findUserByDni(dni: number): Observable<any> {
    return this.http.get<any>(operationUser.findByDni + `${dni}`);
  }
  public findUserByCuit(cuit: number): Observable<any> {
    return this.http.get<any>(operationUser.findByCuit + `${cuit}`);
  }
  public findUserByEmail(email: String): Observable<any> {
    return this.http.get<any>(operationUser.findByEmail + `${email}`);
  }
  public findBeneficiary(userId: String, socialReason: String): Observable<any> {
    return this.http.get<any>(operationUser.findByBeneficiary + `?id=${userId}&socialReason=${socialReason}`);
  }
  public findVolunteer(userId: String, dni: number): Observable<any> {
    return this.http.get<any>(operationUser.findVolunteer + `?id=${userId}&dni=${dni}`);
  }

  /*All operations POST*/
  public addBeneficiary(beficiary: Beneficiary): Observable<Beneficiary> {
    return this.http.post<Beneficiary>(operationUser.createBeneficiary , beficiary);
  }
  public addVolunteer(volunteer: Volunteer): Observable<Volunteer> {
    return this.http.post<Volunteer>(operationUser.createVolunteer , volunteer);
  }
  public addVProvider(provider: Providerr): Observable<Providerr> {
    return this.http.post<Providerr>(operationUser.createProvider , provider);
  }


  /*All operations PUT*/
  public updateBeneficiary(beneficiary: Beneficiary, id: String): Observable<Beneficiary> {
    return this.http.put<Beneficiary>(operationUser.updateBeneficiary+`${id}`, beneficiary);
  }

  public updateVolunteer(volunteer: Volunteer, id: String): Observable<Volunteer> {
    return this.http.put<Volunteer>(operationUser.updateVolunteer+`${id}`, volunteer);
  }

  public updateProvider(provider: Providerr, id: String): Observable<Providerr> {
    return this.http.put<Providerr>(operationUser.updateProvider+`${id}`, provider);
  }


}
