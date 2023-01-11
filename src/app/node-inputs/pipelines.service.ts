import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pipeline, PipelineResponse } from './pipeline';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class PipelinesService {

  setAPIPath(p:String) {
    this.baseApiUrl = p;
  }

  // pipelinesUrl = 'https://rpp.crearecomputing.com/api/publish?SERVICE=QUERY&KEY=onlySomeUsersKnowThis';
  // NOTE: Have to run RPP locally to prevent CORS issue for now.
  // baseApiUrl: String = 'http://127.0.0.1:5000/api/publish?KEY=onlySomeUsersKnowThis';
  baseApiUrl:String = '../api/publish?KEY=onlySomeUsersKnowThis';
  private handleError: HandleError;
  emptyPipelineResponse: PipelineResponse = { message: "nothing" } as PipelineResponse;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PipelinesService');
  }

  getHttpOptions() {
    var opts = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    }
    return opts;
  }

  // Helper function to get the URL for a given service. Can optionally include pipeline name.
  private getPipelinesUrl(service: string, name?: string, data?: string):string {
    var url = `${this.baseApiUrl}&VERBOSE&SERVICE=${service.toUpperCase()}`;
    if (name) {
      url = url.concat('&NAME=', name);
    }
    if (data) {
      url = url.concat('&DATA=', encodeURIComponent(data));
    }
    return url
  }

  /** GET pipelines from the server */
  getPipelines(): Observable<PipelineResponse> {
    return this.http.get<PipelineResponse>(this.getPipelinesUrl("query"), this.getHttpOptions())
      .pipe(
        catchError(this.handleError('getPipelines', this.emptyPipelineResponse))
      );
  }

  /* GET pipelines whose name contains search term */
  searchPipelines(term: string): Observable<PipelineResponse> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<PipelineResponse>(this.getPipelinesUrl("query"), options)
      .pipe(
        catchError(this.handleError<PipelineResponse>('searchPipelines', this.emptyPipelineResponse))
      );
  }

  //////// Save methods //////////

  /** POST: add a new pipeline to the database */
  addPipeline(name: any, pipeline: any): Observable<Pipeline> {
    return this.http.post<Pipeline>(this.getPipelinesUrl("publish", name, pipeline), this.getHttpOptions())
      .pipe(
        catchError(this.handleError('addPipeline', pipeline))
      );
  }

  /** DELETE: delete the pipeline from the server */
  removePipeline(pipeline: Pipeline): Observable<Pipeline> {
    return this.http.post<Pipeline>(this.getPipelinesUrl("remove", pipeline.name), this.getHttpOptions())
      .pipe(
        catchError(this.handleError('removePipeline', pipeline))
      );
  }
}