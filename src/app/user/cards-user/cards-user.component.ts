import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cards-user',
  templateUrl: './cards-user.component.html',
  styleUrls: ['./cards-user.component.css']
})
export class CardsUserComponent implements OnInit {

  label_to_find: any = '';
  beneficiary: any[];
  option: any;
 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
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


  public getAllUsers(): void {
    this.userService.findAll().subscribe(
      (response: any[]) => {
        this.beneficiary = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getUserById(userId: String): void {
    
    this.userService.findUserById(userId).subscribe(
      (response: any[]) => {
        this.beneficiary = [];
        this.beneficiary.push(response);
      },
      (error: HttpErrorResponse) => {
         this.beneficiary=[];
         console.log(error.status); 
       
      }
    );
  }

  public getUserByDni(dni: number): void {
    this.userService.findUserByDni(dni).subscribe(
      (response: any[]) => {
        this.beneficiary = [];
        this.beneficiary.push(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message); 
      }
    );
  }

  public getUserByCuit(cuit: number): void {
    this.userService.findUserByCuit(cuit).subscribe(
      (response: any[]) => {
        this.beneficiary = [];
        this.beneficiary.push(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message); 
      }
    );
  }


  public getUserByEmail(email: String): void {
    this.userService.findUserByEmail(email).subscribe(
      (response: any[]) => {
        this.beneficiary = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message); 
      }
    );
  }

}
