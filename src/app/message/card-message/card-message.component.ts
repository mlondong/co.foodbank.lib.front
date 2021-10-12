import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from 'src/app/model/dtos/userDTO';
import { Message } from 'src/app/model/message/message';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-message',
  templateUrl: './card-message.component.html',
  styleUrls: ['./card-message.component.css']
})



export class CardMessageComponent implements OnInit {


  //Varables defined
  responseMessage: any[] = [];
  sortedMessage: any[] = [];
  responseUser: any[] = [];

  typeMessage: number = 0;
  option: number;
  currentDate: any;




  //Constructor
  constructor(private _messageService: MessageService,
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    let today = new Date();
    this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en-US');
    this.listAll();
    this.listAllUsers();
  }


  public listAllUsers(): void {
    this._userService.findAll().subscribe(
      (response: any[]) => {
        this.responseUser = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }

    );
  }

  //Methos to list All Message
  public listAll(): void {
    this._messageService.findAll().subscribe(
      (response: any[]) => {
        if (response != null) {
          this.responseMessage = [];
          this.responseMessage = response;
        }

      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


  //Method to select  find
  public onFind(form: NgForm): void {
    
    document.getElementById("find-message-form")?.click();
    const id: any = form.controls.usid.value;

    this._messageService.findById(id).subscribe(
      (response: any) => {
        if (response != null) {
          this.responseMessage = [];
          this.responseMessage.push(response);
          form.reset();
        }
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
   
  }


  //Method to buildMessage
  public buildMessage(info: any, userDto: UserDTO): Message {
    return new Message(info.date, info.subject, info.description, userDto);
  }


  //Method to buildUSer dto
  public buildUserDto(data: any): UserDTO {
    return new UserDTO(data.id, data.name, data.email, data.phones);
  }




}
