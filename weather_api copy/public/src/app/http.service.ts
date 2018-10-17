import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeatherFromApi(city){
    console.log("getCity");
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ddf622ff3a78a027fe4bc48867ab3e37`);
  }
}
