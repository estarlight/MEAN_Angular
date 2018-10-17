import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = {};
  city = "";
  constructor(private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    
    this._route.params.subscribe((params: Params) => {
      console.log("params: ", params['city']);
      this.city = params['city'];
      this.getWeather(this.city);
  })
    
  }


  getWeather(city){
    let observable = this._httpService.getWeatherFromApi(city);
    observable.subscribe((data: any) =>{
      console.log("current weather", data);
      console.log("city",city);
      this.weather = data;

    })
  }

}
