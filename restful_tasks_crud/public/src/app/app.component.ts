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
  newTask: any;
  task_editing: any;
  hidden = true;
  // one_task;



  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
    this.newTask = {title: "", description: "" }

  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data: any) => {
      console.log("Got our tasks!", data)
      this.tasks = data;
    })
  }

  onSubmit() {
    let observable = this._httpService.createTask({title: this.newTask.title, description: this.newTask.description});
    observable.subscribe(data => {
      this.newTask = { title: "", description: "" };
      this.getTasksFromService();
    }) 
    }

    edit(id:string){
     this.hidden=false;

      let observable1 = this._httpService.getOneTask(id);
      observable1.subscribe((data: any) => {
      console.log("Got our tasks!", data)
      this.task_editing = data;
    })
  }

    onEdit(){
      let observable = this._httpService.editTask(this.task_editing);
      observable.subscribe(data => {
        console.log('task updated');
        this.task_editing = {title: "", description: ""};
        this.hidden = true;
        this.getTasksFromService();
      })
      
    }

    delete(id:string){
      let observable = this._httpService.destroyTask(id);
      observable.subscribe(data =>{
        console.log("Task deleted");
        this.getTasksFromService();
      })

    }


  // clickAllTasks(){
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe((data: any) => {
  //     console.log("Got our tasks!", data)
  //     this.tasks = data;
  // }

  //   )}

  // clickOneTask(id:string){
  //   let observable = this._httpService.getOneTask(id);
  //   observable.subscribe((data: any) => {
  //     console.log("Got our tasks!", data)
  //     this.one_task = data;
  //   }

  //   )}


}
