import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Providerr } from '../../model/user/provider';
import { Address } from 'src/app/model/address/address';
import { Country } from 'src/app/model/country/country';


@Component({
  selector: 'app-card-edit-provider',
  templateUrl: './card-edit-provider.component.html',
  styleUrls: ['./card-edit-provider.component.css']
})
export class CardEditProviderComponent implements OnInit, OnDestroy {

  providerResponse: Providerr;
  sub: Subscription;
  id: String;


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {

      this.id = params['id'];
      if (this.id) {
        this.userService.findUserById(this.id).subscribe(
          (response: Providerr) => {
            this.providerResponse = response;
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
    const address =  this.buildAddress(updateForm, country);
    const provider = this.buildProvider(updateForm,address);
      
    this.userService.updateProvider(provider, this.id).subscribe(
       (response: Providerr) => {
         this.providerResponse = response;
       }, (error: HttpErrorResponse) => {
         console.log(error.message); //aca debe ser un evento del interceptor
       });
  }


  private buildProvider(provider: any, address:Address): Providerr {
    return new Providerr(provider.name, provider.email, provider.password, provider.phones, provider.cuil, provider.lgRepresentant, address);
  }


  private buildAddress(provider: any, country: Country): Address {
    return new Address(provider.streetName, provider.streetNumber, provider.postalCode ,provider.district, country ) ;
  }

  private buildCountry(provider: any): Country {
    return new Country(provider.country);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/user']);
  }

}
