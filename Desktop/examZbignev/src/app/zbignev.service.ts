import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()

export class ZbignevService {

  constructor(private http: Http) { }

  public getMeme(number): Observable<any[]>{
     return this.http.get(environment.baseUrl +'/Instance_Select?instanceID='+ number +'&apiKey='+ environment.apiKey)
     .map(response => response.json())
     .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg: string;
      errMsg = error.message ? error.message : error.toString();
      console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
