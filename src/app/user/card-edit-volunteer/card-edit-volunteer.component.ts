import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Volunteer } from 'src/app/model/user/volunteer';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/model/country/country';
import { Address } from 'src/app/model/address/address';
import { Vehicule } from 'src/app/model/vehicule/vehicule';
import { Volume } from 'src/app/model/volume/volume';

@Component({
  selector: 'app-card-edit-volunteer',
  templateUrl: './card-edit-volunteer.component.html',
  styleUrls: ['./card-edit-volunteer.component.css']
})

export class CardEditVolunteerComponent implements OnInit, OnDestroy  {

  volunteerResponse: Volunteer;
  sub: Subscription;
  id: String;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {

      this.id = params['id'];
      if (this.id) {
        this.userService.findUserById(this.id).subscribe(
          (response: Volunteer) => {
            this.volunteerResponse = response;
            console.log(this.volunteerResponse);
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
    const volume =  this.buildVolume(updateForm);
    const vehicle = this.builVehicue(updateForm,volume);
    const volunteer = this.builVolunteer(updateForm, vehicle, address);

    

    this.userService.updateVolunteer(volunteer, this.id).subscribe(
      (response: Volunteer) => {
        this.volunteerResponse = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message); //aca debe ser un evento del interceptor
      });
      this.ngOnDestroy(); 
  } 

  private builVolunteer(volunter: any , vehicule: Vehicule, address:Address): Volunteer{
    return new Volunteer(volunter.name, volunter.email, volunter.password, volunter.phones, volunter.dni , vehicule, address);
  }

  private buildVolume(volunter: any): Volume{
    return new Volume(volunter.high, volunter.wide, volunter.longitud);
  }

  private builVehicue(volunter: any, volume: Volume):Vehicule{
    return new Vehicule(volunter.type, volunter.brand, volunter.carPLate, volunter.capacity, volume );
  }

  private buildCountry(volunter: any): Country {
    return new Country(volunter.country);
  }

  private buildAddress(volunter: any, country: Country): Address {
    return new Address(volunter.streetName, volunter.streetNumber, volunter.postalCode ,volunter.district, country ) ;
  }

  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/user']);
  }

}
