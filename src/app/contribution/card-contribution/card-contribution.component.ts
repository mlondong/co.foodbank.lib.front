import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestContribution } from 'src/app/model/order/requestContribution';
import { ContributionService } from 'src/app/services/contribution.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-card-contribution',
  templateUrl: './card-contribution.component.html',
  styleUrls: ['./card-contribution.component.css']
})
export class CardContributionComponent implements OnInit {

  /*Define variables an objects*/
  contribution: any[] = [];
  detailContributionCount: any;
  generalContributionCount: any;
  isShowForm: boolean;
  labelForm: any;
  option:number;
  optionForm:any;
  contributionResponse:any;
  currentDate: any;

  /*Constructor*/
  constructor( 
    private contributionService: ContributionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let today = new Date();
    this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en-US');
    this.contributionResponse={};

    this.listAll();

  }

  //Methos to list all contributions.
  public listAll(): void {
    this.contributionService.findAll().subscribe(
      (response: RequestContribution[]) => {
        this.contribution = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


  //remove contribution
  public removeContribution(id: string) {

  }

  //Show form to edit
  public showDataContributionGeneral(id: string):void {
    this.optionForm="General-Contribution";
    this.contributionResponse={};
    this.contributionService.findById(id).subscribe(
      (response: any) => {
        this.contributionResponse = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  //Show form to edit
  public showDataContributionDetail(id: string):void {
    this.optionForm="Detail-Contribution";
    this.contributionResponse={}; 
    this.contributionService.findById(id).subscribe(
      (response: any) => {
        this.contributionResponse = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


   


  //Method to check Form type
  public checkForm(form: any):boolean{
    return (form.numOfPackage != null) ? true : false;
  }

  //Method to calculate State Pending
  public calculateState(option: string): number {
    let result: any[] = this.contribution.filter(d => d.state.type === option);
    return result.length;
  }


  //Methos to calculate the number of each contribution
  public calculateContributionNumberGeneral(): number {
    let count: number = 0;
    this.contribution.forEach(d => {
      if (d.volume != null) {
        count++;
      }
    }
    );
    return count;
  }


  //Method to calculate number of contributions Detail
  public calculateContributionNumberDetail() {
    let count: number = 0;
    this.contribution.forEach(d => {
      if (d.codeBar != null) {
        count++;
      }
    }
    );
    return count;

  }


  //Change form to search
  public changeForm(val: any): void {

    this.option=val;

    switch (this.option) {
      case 1: this.setSearchById(); break;
      case 2: this.setSearchByCode(); break;
    }

  }


  public setSearchById() {
    this.isShowForm = true;
    this.labelForm = "By ID";
    
  }

  public setSearchByCode() {
    this.isShowForm = true;
    this.labelForm = "By CodeBar";
  }
  

//Method to select  find
public onFind(form: NgForm):void{
  switch(this.option){
    case 1: this.onFindById(form); break;
    case 2: this.onFindByCodeBar(form); break;
  }
}


  //Method to find contributions
  public onFindById(form: NgForm): void {
    let data: any = form.controls.usid.value;
    this.contributionService.findById(data).subscribe(
      (response: any[]) => {
        this.contribution = [];
        this.contribution.push(response);
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


  //Method to find by codebar
  public onFindByCodeBar(form: NgForm): void {
    let data: any = form.controls.usid.value;
    this.contributionService.findByCodeBarAll(data).subscribe(
      (response: any[]) => {
        this.contribution = [];
        this.contribution.push(response);
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

}
