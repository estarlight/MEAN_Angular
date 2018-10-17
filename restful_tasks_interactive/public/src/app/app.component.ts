import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'public';
  tasks = [];
  one_task;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getTasksFromService();

  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data: any) => {
      console.log("Got our tasks!", data)
      this.tasks = data;
    })
  }

  clickAllTasks(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data: any) => {
      console.log("Got our tasks!", data)
      this.tasks = data;
  }

    )}

  clickOneTask(id:string){
    let observable = this._httpService.getOneTask(id);
    observable.subscribe((data: any) => {
      console.log("Got our tasks!", data)
      this.one_task = data;
    }

    )}


}
