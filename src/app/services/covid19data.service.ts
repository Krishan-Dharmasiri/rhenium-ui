import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class Covid19dataService {

  private _url = 'https://api.covid19api.com/summary';
  private _url_live_sl = 'https://api.covid19api.com/dayone/country/sri-lanka/status/confirmed/live';

  constructor(private _httpClient : HttpClient) { }

  //Summary data for global and for each country
  getSummary():Observable<any>{
    return this._httpClient.get(this._url);
  }

  getCaseByCaseDataForSL(){
    return this._httpClient.get(this._url_live_sl);
  }

}
