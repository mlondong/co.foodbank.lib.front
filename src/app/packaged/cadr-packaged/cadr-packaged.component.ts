import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Packaged } from 'src/app/model/packaged/packaged';
import { PackagedService } from 'src/app/services/packaged.service';

@Component({
  selector: 'app-cadr-packaged',
  templateUrl: './cadr-packaged.component.html',
  styleUrls: ['./cadr-packaged.component.css']
})
export class CadrPackagedComponent implements OnInit {

  //Defined variables
  responsePackaged: any[] = [];
  responseMirrorPackaged: any[] = [];
  option: number;
  isShowForm: boolean;
  labelForm: any;
  currentDate: any;
  passDate :any;



  //Constructor
  constructor(private _servicepackaged: PackagedService) { }

  //Init all
  ngOnInit(): void {
    let today = new Date();
    this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en-US');
    let myPastDate =new Date(today);
    this.passDate= formatDate(myPastDate.setDate(myPastDate.getDate() - 1), 'yyyy-MM-dd', 'en-US');
   
    this.listAll();
  }

  //Method to findAll packagaged
  public listAll(): void {
    this._servicepackaged.findAll().subscribe(
      (response: any[]) => {
        this.responsePackaged = response;
        this.responseMirrorPackaged=response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    );
  }


  //Method to calculate close packaged
  public inCalculateState(option: any): number {
    let result: any[] = this.responseMirrorPackaged.filter(d => d.state.state === option);
    return result.length;
  }


  //Method to find parameters
  public onFind(findForm: NgForm): void {

    document.getElementById("find-message-form")?.click();

    switch (this.option) {
      case 1: this.onFindById(findForm); break;
      case 2: this.onFindByDate(findForm); break;
    }
  }

  //Method to find contributions
  public onFindById(form: NgForm): void {
    let data: any = form.controls.usid.value;
    this._servicepackaged.findById(data).subscribe(
      (response: any[]) => {
        if (response != null) {
          this.responsePackaged = [];
          this.responsePackaged.push(response);
          form.reset();
        }
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }



  //Method to find by codebar
  public onFindByDate(form: NgForm): void {
    let data: any = form.controls.usid.value;
    this._servicepackaged.findByDate(data).subscribe(
      (response: any[]) => {
        if (response != null) {
          this.responsePackaged = [];
          this.responsePackaged= response;
          form.reset();
        }
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  //Change form to search
  public changeForm(val: any): void {

    this.option = val;
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
    this.labelForm = "By Date Less than current introduced";
  }

  //Methos to add packaged
  public addObjPackaged(form: NgForm): any {

    const packaged = this.buildpackaged(form);

    this._servicepackaged.create(packaged).subscribe(
      (response: any) => {
        if (response.length != 0) {
          document.getElementById("add-pack-form")?.click();
          this.responsePackaged.push(response);
          form.reset();
        }
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


  //Build Packaged
  public buildpackaged(data: any): Packaged {
    return new Packaged(data.units, data.datePackage);
  }


  //Method to calculatePackageByDate()
  public calculatePackageByDate(): any{
    const today:any[] = this.responseMirrorPackaged.filter(d=> d.datePackage.substring(0,10) === this.currentDate);
    return today.length;
  }


  //Method to calculatePackageByDateYesterday()
  public calculatePackageByDateYesterday(): any{
    const today:any[] = this.responseMirrorPackaged.filter(d=> d.datePackage.substring(0,10) === this.passDate);
    return today.length;
  }
}
