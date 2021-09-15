import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorService } from './services/error.service';



@Injectable({
    providedIn: 'root'
  })
export class AppHttpConfigInterceptor implements HttpInterceptor {
    

    //constructor(public errorDialogService: ErrorDialogService) { }
    constructor(public errorService: ErrorService) { }

    intercept(
          request: HttpRequest<any>,
          next: HttpHandler
        ):Observable<HttpEvent<any>> {

        /*Para uso de token y headers se puede usar cuando se implemente jwt
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        */
        return next.handle(request)
            .pipe(
                retry(1),
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        console.log('event--->>>', event);
                       // this.errorService.openEvent(event);
                    }
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    let data = {};
                    data = {
                        reason: error && error.error && error.error.reason ? error.error.reason : '',
                        status: error.status
                    };
                    this.errorService.openDialog(error.error);
                    console.log('error--->>>', error);
                    return throwError(error.error);
                }));
    }
}