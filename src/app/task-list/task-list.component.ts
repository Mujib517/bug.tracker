import { Component } from '@angular/core';
import { TaskService } from './../shared/task.service';
import { Task } from './../models/task.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {

  tasks: Task[];
  //taskSvc:TaskService;

  constructor(private taskSvc: TaskService) {
    //this.taskSvc=taskSvc;
    taskSvc.get()
      // .then((resonse)=>this.tasks=resonse)
      .subscribe(
      (response) => this.tasks = response, //next function
      (err) => console.log(err),
      () => console.log('compoleted')
      )
  }
}
