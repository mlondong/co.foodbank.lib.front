import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Beneficiary } from '../model/user/beneficiary';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

/*Class to operata all users*/
export class UserComponent implements OnInit {

beneficiary: any[];

constructor(private userService: UserService) {   }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.findAll().subscribe(
      (response: any[]) => {
        this.beneficiary = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
