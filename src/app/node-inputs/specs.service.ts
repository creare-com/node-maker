import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpecsResponse, DatetimesResponse } from './specs';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root',
})

export class SpecsService {

  setAPIPath(p:String) {
    this.specsURL = p;
  }


  // specsURL:String = 'http://127.0.0.1:5000/api/publish/UI_spec';
  specsURL:any = '../api/publish/UI_spec';
  private handleError: HandleError;
  emptySpecsResponse: SpecsResponse = { message: "nothing" } as SpecsResponse;
  emptyDatetimesResponse: DatetimesResponse = { message: "nothing" } as DatetimesResponse;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SpecsService');
  }

  getSpecs(): Observable<SpecsResponse> {
    return this.http.get<SpecsResponse>(this.specsURL,httpOptions)
      .pipe(
        catchError(this.handleError('getSpecs', this.emptySpecsResponse))
      );
  }

  getDatetimes(): Observable<any> {
    let opts = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.get<DatetimesResponse>(this.specsURL.replace("UI_spec","leaflet_datetimes"),opts)
      .pipe(
        catchError(this.handleError('getSpecs', this.emptyDatetimesResponse))
      );
  }

}