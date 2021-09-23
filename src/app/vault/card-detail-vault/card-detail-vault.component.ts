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



  constructor(private contributionService: ContributionService,
    private vaultService: VaultService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    console.log("llamamndo...");
    this.contributionResponse={};
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


  public editObjVault(form: NgForm): void {

  }

  public addDetContribution(form: NgForm): void {

  }

  public editFormContribution(form: NgForm) {
    /* this.contributionService.updateDetailContribution(id,  DetailContribution).subscribe(
       (response: any) => {
         this.contributionResponse = response;
       },
       (error: HttpErrorResponse) => {
         console.log(error.status);
       }
     );*/
  }


  private editDGeneralContribution(form: NgForm) {
  }

  public showDataContribution(id: string) {
    this.contributionResponse={};
    
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
