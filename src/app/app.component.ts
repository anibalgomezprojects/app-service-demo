import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './services/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app-service-demo';

  tasks: Task[] = [];

  constructor(private _task: TaskService) {
    this._task.getTasks().subscribe(data => {
      this.tasks = data;
    })
  }

}
