import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit():void {
    this.tasks = this.taskService.tasks;
  }
}