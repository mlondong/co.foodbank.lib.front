import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../error/error.component';
import {EventComponent} from '../event/event.component';

interface Warning {
    status?: string;
    statusTex?: string;
    body?: string;
}

@Injectable()
/*Service classs to handle all error cagth for interceptor.*/
export class ErrorService {

    public isDialogOpen: Boolean = false;

    constructor(public dialog: MatDialog) { }

    openDialog(data): any {

        if (this.isDialogOpen) {
            return false;
        }
        
        this.isDialogOpen = true;
        
        const dialogRef = this.dialog.open(ErrorComponent, {
            width: '400px',
            data : data
        });

        dialogRef.afterClosed().subscribe(result => {
            this.isDialogOpen = false;
            let srt;
            srt = result;
        });
    }



    openEvent(data): any {
        if (this.isDialogOpen) {
            return false;
        }
       
        let warnning: Warning = {status : data.status, statusTex : data.statusTex , body : data.body+''+'NOT_FOUND' }
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(EventComponent, {
            width: '600px',
            data : warnning
        });

        dialogRef.afterClosed().subscribe(result => {
            this.isDialogOpen = false;
            let srt;
            srt = result;
        });
    }
 
}

