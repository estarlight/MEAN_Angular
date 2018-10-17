import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';

  // weather = {};

  constructor(private _httpService: HttpService, private _route: ActivatedRoute) {}

  ngOnInit(){
    // this.getWeather();

  }

  // getWeather(){
  //   let observable = this._httpService.getWeather();
  //   observable.subscribe((data: any) =>{
  //     console.log("burbank weather", data);
  //     this.weather = data;

  //   })
  // }




}
