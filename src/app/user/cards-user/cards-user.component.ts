import { Component, OnInit, Provider } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { User } from '../../model/user/user.model';
import { Beneficiary } from 'src/app/model/user/beneficiary';
import { Volunteer } from 'src/app/model/user/volunteer';
import { Providerr } from 'src/app/model/user/provider';

import { Address } from 'src/app/model/address/address';
import { Country } from 'src/app/model/country/country';

import { Vehicule } from 'src/app/model/vehicule/vehicule';
import { Volume } from 'src/app/model/volume/volume';

@Component({
  selector: 'app-cards-user',
  templateUrl: './cards-user.component.html',
  styleUrls: ['./cards-user.component.css']
})
export class CardsUserComponent implements OnInit {

  label_to_find: any = '';
  user: any[];

  option: any;
  typeForm: any;

  userObject: Array<User> = [];


  beneficiary: Beneficiary;
  volunteer: Volunteer;
  provider: Providerr;


  constructor(private userService: UserService) { }

  /*Method init to put all users in a list */
  ngOnInit(): void {
    this.getAllUsers();
  }


  //! ********************************************************************************************************************************************
  //! MAIN FUNCTIONS TO HANDLE OPERATIONS IN USER
  //! @author Mauricio Londono 

  /*Method to find user by diferents queries*/
  public onUser(findForm: NgForm): void {
    document.getElementById("add-employee-form")?.click();
    let data: any = findForm.controls.usid.value;
    switch (this.option) {
      case 1: this.getUserById(data); break;
      case 2: this.getUserByDni(data); break;
      case 3: this.getUserByCuit(data); break;
      case 4: this.getUserByEmail(data); break;
    }
    findForm.reset();
  }



  /*Method to add volunteer  with endpoint*/
  public addObjVolunteer(addForm: NgForm): void {
    const country = this.buildCountry(addForm);
    const address = this.buildAddress(addForm, country);
    const volume = this.buildVolume(addForm);
    const vehicle = this.buildVehicule(addForm, volume);
    const volunteer = this.builVolunteer(addForm, vehicle, address);
 
    this.userService.addVolunteer(volunteer).subscribe(
      (response: Volunteer) => {
        this.volunteer = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message); //aca debe ser un evento del interceptor
      });
    //document.getElementById("add-employee-provider")?.click();
    //addForm.reset();
  }



  /*Method to add provider  with endpoint*/
  public addObjUser(addForm: NgForm): void {

    if (this.typeForm === "Beneficiary") {
      this.handleBeneficiary(addForm);
    } else if (this.typeForm === "Provider") {
      this.handleProvider(addForm);
    }
  }




  /*Method to handle Providder form*/
  private handleProvider(addForm: NgForm): void {
    const country = this.buildCountry(addForm);
    const address = this.buildAddress(addForm, country);
    const provider = this.buildProvider(addForm, address);
    this.userService.addProvider(provider).subscribe(
      (response: Providerr) => {
        this.provider = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message); //aca debe ser un evento del interceptor
      });
    //document.getElementById("add-employee-provider")?.click();
    addForm.reset();
  }


  /*Method to handle Beneficiary form*/
  private handleBeneficiary(addForm: NgForm): void {
    const country = this.buildCountry(addForm);
    const address = this.buildAddress(addForm, country);
    const beneficiary = this.buildBeneficiary(addForm, address);
    this.userService.addBeneficiary(beneficiary).subscribe(
      (response: Beneficiary) => {
        this.beneficiary = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message); //aca debe ser un evento del interceptor
      });
    //document.getElementById("add-employee-provider")?.click();
    addForm.reset();
  }

  private buildVehicule(volunter: any, volume: Volume):Vehicule{
    return new Vehicule(volunter.type, volunter.brand, volunter.carPLate, volunter.capacity, volume );
  }

  private builVolunteer(volunter: any , vehicule: Vehicule, address:Address): Volunteer{
    return new Volunteer(volunter.name, volunter.email, volunter.password, volunter.phones, volunter.dni , vehicule, address);
  }

  private buildVolume(volunter: any): Volume{
    return new Volume(volunter.high, volunter.wide, volunter.longitud);
  }

  private buildBeneficiary(beneficiary: any, address: Address): Beneficiary {
    return new Beneficiary(beneficiary.name, beneficiary.email, beneficiary.password, beneficiary.phones,
      beneficiary.socialReason, beneficiary.category, beneficiary.size, address);
  }


  private buildProvider(provider: any, address: Address): Providerr {
    return new Providerr(provider.name, provider.email, provider.password, provider.phones, provider.cuil, provider.lgRepresentation, address);
  }

  private buildAddress(provider: any, country: Country): Address {
    return new Address(provider.streetName, provider.streetNumber, provider.postalCode, provider.district, country);
  }

  private buildCountry(provider: any): Country {
    return new Country(provider.country);
  }

  /*Method to change form type */
  public setForm(value: any) {
    switch (value) {
      case 1: this.typeForm = "Beneficiary"; break;
      case 2: this.typeForm = "Provider"; break;
      case 3: this.typeForm = "Volunteer"; break;

    }
  }


  /*Method used to handle all search from User*/
  public changeLabelName(label: any) {
    this.option = label;

    switch (label) {
      case 1: this.label_to_find = ' ID'; break;
      case 2: this.label_to_find = ' DNI'; break;
      case 3: this.label_to_find = ' CUIT'; break;
      case 4: this.label_to_find = ' @Email'; break;
    }
  }


  /*Method to list all users*/
  public getAllUsers(): void {
    this.userService.findAll().subscribe(
      (response: any[]) => {
        this.user = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  /*Method to find user by DNI*/
  public getUserById(userId: String): void {

    this.userService.findUserById(userId).subscribe(
      (response: any[]) => {
        this.user = [];
        this.user.push(response);
      },
      (error: HttpErrorResponse) => {
        this.user = [];
        console.log(error.status);

      }
    );
  }

  /*Method to find user by dni*/
  public getUserByDni(dni: number): void {
    this.userService.findUserByDni(dni).subscribe(
      (response: any[]) => {
        this.user = [];
        this.user.push(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  /*Method to find user by cuit*/
  public getUserByCuit(cuit: number): void {
    this.userService.findUserByCuit(cuit).subscribe(
      (response: any[]) => {
        this.user = [];
        this.user.push(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  /*Method to find user by email*/
  public getUserByEmail(email: String): void {
    this.userService.findUserByEmail(email).subscribe(
      (response: any[]) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  //! ******************************************************************************@author Mauricio Londono **************************************************/







  /*Method to find User in the Array User[], never get to datasource*/
  public showFormUser(id: String): void {
    this.setAllInNan();
    const obj = this.findIdObjectInUserArray(id);
    this.isTypeOf(obj);

    if (!this.isEmptyObject(this.beneficiary)) {
      console.log("en beneficiary");
      this.fillUpTheForm(this.beneficiary);
    } else if (!this.isEmptyObject(this.volunteer)) {
      console.log("en vlunteer");
      this.fillUpTheForm(this.volunteer);
    } else if (!this.isEmptyObject(this.provider)) {
      console.log("en provider");
      this.fillUpTheForm(this.provider);
    }
  }

  /*Method to fillUp the form initial part.*/
  private fillUpTheForm(obj: any): void {


    (<HTMLInputElement>document.getElementById("name")).value = obj.name;
    (<HTMLInputElement>document.getElementById("email")).value = obj.email;
    (<HTMLInputElement>document.getElementById("password")).value = obj.password;
    (<HTMLInputElement>document.getElementById("state")).value = obj.state;
    (<HTMLInputElement>document.getElementById("phones")).value = obj.phones;

    (<HTMLInputElement>document.getElementById("streetName")).value = obj.address.streetName;
    (<HTMLInputElement>document.getElementById("streetNumber")).value = obj.address.streetNumber;
    (<HTMLInputElement>document.getElementById("postalCode")).value = obj.address.postalCode;
    (<HTMLInputElement>document.getElementById("district")).value = obj.address.district;
    (<HTMLInputElement>document.getElementById("country")).value = obj.address.country.name;

  }

  /*Check if an object is empty*/
  public isEmptyObject(obj: any): boolean {
    return !Object.keys(obj).length;
  }


  /*Method to set all objects in null*/
  private setAllInNan() {
    this.beneficiary = {} as Beneficiary;
    this.provider = {} as Providerr;
    this.volunteer = {} as Volunteer;
  }

  /*Method to find an object User by in Array User[]*/
  private findIdObjectInUserArray(id: String): User | undefined {
    Object.keys(this.user)
      .map((key) => {
        this.userObject.push(this.user[key]);
      });
    return this.userObject.find(element => element.id === id);
  }

  /*Method to check the type of Object User*/
  private isTypeOf(obj: any): void {
    if (this.isBeneficiary(obj)) {
      this.beneficiary = obj;
    } else if (this.isVolunteer(obj)) {
      this.volunteer = obj;
    } else if (this.isProvider(obj)) {
      this.provider = obj;
    }

  }


  /*Method to check if Object is Volunteer*/
  private isVolunteer(obj: any): boolean {
    return (obj as Volunteer).dni !== undefined;
  }

  /*Method to check if Object is Provider*/
  private isProvider(obj: any): boolean {
    return (obj as Providerr).cuil !== undefined;
  }

  /*Method to check if Object is Beneficiary*/
  private isBeneficiary(obj: any): boolean {
    return (obj as Beneficiary).socialReason !== undefined;
  }







}
