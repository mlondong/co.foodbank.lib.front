import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VaultService } from '../../services/vault.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vault } from 'src/app/model/vault/vault';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Providerr } from 'src/app/model/user/provider';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ContributionService } from '../../services/contribution.service';
import { Address } from 'src/app/model/address/address';
import { Country } from 'src/app/model/country/country';
import { DetailContribution } from 'src/app/model/vault/detailContribution';
import { GeneralContribution } from 'src/app/model/vault/generalContribution';
import { Volume } from 'src/app/model/volume/volume';
import { isDefined } from '@angular/compiler/src/util';


@Component({
  selector: 'app-card-detail-vault',
  templateUrl: './card-detail-vault.component.html',
  styleUrls: ['./card-detail-vault.component.css']
})
export class CardDetailVaultComponent implements OnInit {

  sub: Subscription;
  id: string;
  vaultResponse: Vault;
  user: Providerr;
  optionForm: string;
  isShowForm: boolean;
  currentDate: any;
  contributionResponse: any;
  updatedContribution: any;



  constructor(private contributionService: ContributionService,
    private vaultService: VaultService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.contributionResponse = {};
    this.updatedContribution = {};
    this.vaultResponse = <Vault>{};


    let today = new Date();
    this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en-US');

    this.sub = this.route.params.subscribe(params => {

      this.id = params['id'];
      this.initUser();

      if (this.id) {
        this.vaultService.findById(this.id).subscribe(
          (response: Vault) => {
            this.vaultResponse = response;
          }, (error: HttpErrorResponse) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Null in id");/// aca es un evento que deberia tomar el  interceptor.
      }
    });

  }


  private initUser(): void {
    this.userService.findBySucusal(this.id).subscribe(
      (response: Providerr) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }

  public changeForm(option: any): void {
    switch (option) {
      case 1: this.setFormDetailContribution(); break;
      case 2: this.setFormGeneralContribution(); break;
    }
  }


  public setFormGeneralContribution() {
    this.isShowForm = true;
    this.optionForm = "General Contribution";
  }

  public setFormDetailContribution() {
    this.isShowForm = false;
    this.optionForm = "Detail Contribution";
  }

  /*Method to update a vault*/
  public editObjVault(form: NgForm): void {
    console.log(form);
    const country = this.buildCountry(form);
    const address = this.buildAddress(form, country);
    const vault = this.buildVault(form, address);

    this.vaultService.updateVault(this.vaultResponse.id, vault).subscribe(
      (response: any) => {
        this.vaultResponse = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }

  private buildVault(data: any, address: Address): Vault {
    return new Vault(data.phones, data.contact, address);
  }

  private buildAddress(data: any, country: Country): Address {
    return new Address(data.streetName, data.streetNumber, data.postalCode, data.district, country);
  }

  private buildCountry(data: any): Country {
    return new Country(data.country);
  }


  /*Method to Add new Contributions*/
  public addDetContribution(form: NgForm): void {

    //Check Detail contribution
    if (this.isShowForm === false) {
      const detailContrib = this.buildDetailContribution(form);

      this.vaultService.addDetailContribution(this.vaultResponse.id, detailContrib).subscribe(
        (response: any) => {
          this.vaultResponse = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error.status);
        }
      );
    } else {

      //Check General contribution
      const volume = this.buildVolume(form);
      const generalContrib = this.buildGeneralContribution(form, volume);

      this.vaultService.addGeneralContribution(this.vaultResponse.id, generalContrib).subscribe(
        (response: any) => {
          this.vaultResponse = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error.status);
        }
      );
    }
  }


  public buildVolume(data: any): Volume {
    return new Volume(data.high, data.wide, data.longitud);
  }

  public buildGeneralContribution(data: any, volume: Volume): GeneralContribution {
    return new GeneralContribution(data.description, data.date, volume);
  }

  public buildDetailContribution(data: any): DetailContribution {
    return new DetailContribution(data.description, data.date, data.codeBar, data.numOfPackage);
  }



  /*Method to update  Contributions*/
  public editFormContribution(form: NgForm) {

    const isDetail = this.checkForm(form);
    let idVault = this.vaultResponse.id;
    let idContribution = this.getIdContribution(form);


    if (isDetail === true) {
      const detailContrib = this.buildDetailContribution(form);

      this.vaultService.updateDetailContributionInVault(idVault, idContribution, detailContrib).subscribe(
        (response: any) => {
          this.vaultResponse = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error.status);
        }
      );
    }
    else {
      const volume = this.buildVolume(form);
      const generalContrib = this.buildGeneralContribution(form, volume);
      this.vaultService.updateGeneralContributionInVault(idVault, idContribution, generalContrib).subscribe(
        (response: any) => {
          this.vaultResponse = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error.status);
        }
      );
    }

   
  }

  /*Method to remove contributions in state pending*/
  public removeContribution(form: any){

  }





  public getIdContribution(data: any): string {
    return data.id;
  }

  public checkForm(data: any): boolean {

    let isDetail: boolean = false;
    if (data.numOfPackage != null) {
      isDetail = true;
    }
    return isDetail
  }

  private editDGeneralContribution(form: NgForm) {
  }

  public showDataContribution(id: string) {
    this.contributionResponse = {};
    this.contributionService.findById(id).subscribe(
      (response: any) => {
        this.contributionResponse = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }

  public showFormDetailContribution() {
  }


}
