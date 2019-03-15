import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from 'rxjs';
// import { Observable } from "rxjs/Observable";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if(localStorage.getItem('token')){
      request = request.clone({
        setHeaders: {
          "x-access-token": localStorage.getItem('token'),
          "Content-Type": "application/json"
        }
      });
    }else{
      request = request.clone({
        setHeaders: {
          "Content-Type": "application/json"
        }
      });
    }

    return next.handle(request);
  }
}
