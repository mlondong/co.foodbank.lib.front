import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beneficiary } from '../../model/user/beneficiary';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Country } from 'src/app/model/country/country';
import { Address } from 'src/app/model/address/address';


@Component({
  selector: 'app-card-edit-beneficiary',
  templateUrl: './card-edit-beneficiary.component.html',
  styleUrls: ['./card-edit-beneficiary.component.css']
})
export class CardEditBeneficiaryComponent implements OnInit, OnDestroy {


  beneficiaryResponse: Beneficiary;
  sub: Subscription;
  id: String;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.userService.findUserById(this.id).subscribe(
          (response: Beneficiary) => {
            this.beneficiaryResponse = response;
            console.log(this.beneficiaryResponse);
          }, (error: HttpErrorResponse) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Null in id");/// aca es un evento que deberia tomar el  interceptor.
      }
    });
  }


  /*Method to update user with endpoint*/
  public toUpdateUser(updateForm: NgForm): void {
  
    const country = this.buildCountry(updateForm);
    const address = this.buildAddress(updateForm, country);
    const beneficiary = this.buildBeneficiary(updateForm, address);
    console.log(beneficiary);

    this.userService.updateBeneficiary(beneficiary, this.id).subscribe(
       (response: Beneficiary) => {
         this.beneficiaryResponse = response;
       }, (error: HttpErrorResponse) => {
         console.log(error.message); //aca debe ser un evento del interceptor
    });
    this.ngOnDestroy(); 
  }



  private buildBeneficiary(updateForm: any, address: Address): Beneficiary {
    return new Beneficiary(updateForm.name, updateForm.email, updateForm.password, updateForm.phones,
      updateForm.socialReason, updateForm.category, updateForm.size, address);
  }

  private buildCountry(volunter: any): Country {
    return new Country(volunter.country);
  }

  private buildAddress(volunter: any, country: Country): Address {
    return new Address(volunter.streetName, volunter.streetNumber, volunter.postalCode, volunter.district, country);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/user']);
  }



}
