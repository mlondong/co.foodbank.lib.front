import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent{

  info : any[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
     this.info=data;
  }
}
