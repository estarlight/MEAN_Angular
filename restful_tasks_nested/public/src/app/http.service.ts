import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
   }
   getTasks(){
    return this._http.get('/tasks');
    }

    getOneTask(id:string){
      return this._http.get(`/tasks/${id}`)
    }

    createTask({title, description}){
      return this._http.post('/tasks', {title, description});
    }

    editTask(updated_task){
      return this._http.put(`/tasks/${updated_task._id}`, updated_task);
    }

    destroyTask(id:string){
      return this._http.delete(`/tasks/${id}`);
    }
}
