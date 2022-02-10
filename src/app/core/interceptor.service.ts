import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MsgDialogComponent } from '../shared/components/msg-dialog/msg-dialog.component';
import { MessageDialogData } from '../shared/interfaces/MessageDialogData';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private _auth: AuthService,
              private _dialog: MatDialog) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this._auth.isAuthenticated()) return next.handle(req).pipe(catchError((err) => this.errorHandler(err, req, next)));
    
    const newreq = req.clone({setHeaders: {Authorization: `Bearer ${this._auth.getToken()!}`}})

    return next.handle(newreq).pipe(catchError((err) => this.errorHandler(err, req, next)));
  }

  errorHandler(err: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler) {
    if(!environment.production) console.log(err);

    if(err.status == 401) {
      this._auth.logout();
    }
    if(err.error.message != null)
    {
      this._dialog.open<MsgDialogComponent, MessageDialogData>(MsgDialogComponent, {
        data: { title: "Erro!", message: err.error.message}
      });
    }


    return throwError(() => 'Something wrong happen');
  }
}
