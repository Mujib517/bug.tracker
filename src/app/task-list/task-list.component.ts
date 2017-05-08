import { Component } from '@angular/core';
import {TaskService} from './../shared/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls:['./task-list.css']
})
export class TaskListComponent {

  tasks: any[];
  //taskSvc:TaskService;

  constructor(private taskSvc:TaskService) {
    //this.taskSvc=taskSvc;
      this.tasks=taskSvc.get();
  }
}
