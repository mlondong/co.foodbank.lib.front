import { Component, OnInit, Provider } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { User } from '../../model/user/user.model';
import { Beneficiary } from 'src/app/model/user/beneficiary';
import { Volunteer } from 'src/app/model/user/volunteer';
import { Providerr } from 'src/app/model/user/provider';

@Component({
  selector: 'app-cards-user',
  templateUrl: './cards-user.component.html',
  styleUrls: ['./cards-user.component.css']
})
export class CardsUserComponent implements OnInit {

  label_to_find: any = '';
  user: any[];
  option: any;
  myvalue: String = "mauricio";

  userObject: Array<User> = [];
  beneficiary: Beneficiary;
  volunteer: Volunteer;
  provider: Providerr;
  toUpdate: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.toUpdate;
  }

  public changeLabelName(label: any) {
    this.option = label;

    switch (label) {
      case 1: this.label_to_find = ' ID'; break;
      case 2: this.label_to_find = ' DNI'; break;
      case 3: this.label_to_find = ' CUIT'; break;
      case 4: this.label_to_find = ' @Email'; break;
    }
  }

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


  /*Method to update user with endpoint*/
  public toUpdateUser(updateForm: NgForm): void {
    document.getElementById("update-employee-form")?.click();
    //let data: any = updateForm.controls.usid.value;
    console.log( updateForm);
    console.log( updateForm.controls['name'].value);
    //console.log("valueeee ..." + updateForm.controls.name.value);
     //console.log(this.toUpdate);
  }
  //! @author Mauricio Londono 
  





  public getAllUsers(): void {
    this.userService.findAll().subscribe(
      (response: any[]) => {
        this.user = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

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
    
    this.toUpdate=obj;

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
