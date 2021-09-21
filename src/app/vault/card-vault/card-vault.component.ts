import { Component, OnInit, Provider } from '@angular/core';
import { UserService } from '../../services/user.service';
import { VaultService } from '../../services/vault.service';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Address } from 'src/app/model/address/address';
import { Country } from 'src/app/model/country/country';
import { Vault } from 'src/app/model/vault/vault';

import { ErrorService } from '../../services/error.service';
import { Providerr } from '../../model/user/provider';

@Component({
  selector: 'app-card-vault',
  templateUrl: './card-vault.component.html',
  styleUrls: ['./card-vault.component.css']
})
export class CardVaultComponent implements OnInit {

  vault: any[] = [];
  users: any[] = [];
  userObjectFilter: Array<Providerr> = [];
  filter: Array<Providerr> = [];
  responseVault: any={};



  option: any;
  label_to_find: any = '';

  /*cONSTRUCTOR*/
  constructor(private vaultService: VaultService, private userService: UserService, public errorService: ErrorService) { }

  /*Method init to put all users in a list */
  ngOnInit(): void {
    this.getAllUsers();
    this.listAll();

  }


  /*Method used to handle all search from User*/
  public changeLabelName(label: any) {
    this.option = label;
    switch (label) {
      case 1: this.label_to_find = ' ID'; break;
      case 2: this.label_to_find = ' CONTACT'; break;
      case 3: this.label_to_find = ' DISTRICT'; break;
    }
  }

  /*Methos to find all topics*/
  public onVault(findForm: NgForm): void {

    document.getElementById("button-vault-form")?.click();
    let data: any = findForm.controls.usid.value;
    switch (this.option) {
      case 1: this.findById(data); break;
      case 2: this.findByContact(data); break;
      case 3: this.findByLOcation(data); break;
    }
    findForm.reset();

  }

  /*Methos to get all users*/
  public getAllUsers(): void {
    this.userService.findAll().subscribe(
      (response: any[]) => {
        this.users = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
    
  }


  public filterAllProvider(): void {
    this.userObjectFilter =[];
    Object.keys(this.users)
      .map((key) => {
        this.userObjectFilter.push(this.users[key]);
      });

      this.userObjectFilter = this.userObjectFilter && this.userObjectFilter.filter(d => d.cuil !=null);
  }


  /*Method to gel all vaults*/
  public listAll(): void {
    this.vaultService.findAll().subscribe(
      (response: any[]) => {
        this.vault = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }


  public findByLOcation(name: string): void {
    const datos = this.vaultService.findByDistrict(name).subscribe(
      (response: any[]) => {
        this.vault = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }

  public findById(id: string): void {
    this.vaultService.findById(id).subscribe(
      (response: any[]) => {
        this.vault = [];
        this.vault.push(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }


  public findByContact(data: any): void {
    const datos = this.vaultService.findByContact(data).subscribe(
      (response: any[]) => {
        this.vault = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }




  /*Method to add vault*/
  public addObjVault(form: NgForm): void {
    const country = this.buildCountry(form);
    const address = this.buildAddress(form, country);
    const vault = this.buildVault(form, address);
    const idProvd = this.getIdrovider(form);

    this.userService.createVault(vault, idProvd).subscribe(
      (response: any) => {
        this.responseVault = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message); //aca debe ser un evento del interceptor
      });

     if(this.responseVault != null){
        document.getElementById("add-vault-form")?.click();
        document.getElementById("onAddVaultForm")?.onreset;
        this.listAll();
     }
      
  }

  private getIdrovider(provider: any):any {
    return provider.idProvider;
 }


  private buildVault(provider: any, address: Address):Vault {
     return new Vault(provider.phones, provider.contact, address);
  }

  private buildAddress(provider: any, country: Country): Address {
    return new Address(provider.streetName, provider.streetNumber, provider.postalCode, provider.district, country);
  }

  private buildCountry(provider: any): Country {
    return new Country(provider.country);
  }

}









