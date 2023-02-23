import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable()

export class TaskService {
  tasks: Task[] = [
    new Task("Entrenar", "tengo que Entrenar"),
    new Task("Programar", "tengo que Programar"),
    new Task("Comer", "tengo que Comer"),
    new Task("Dormir", "tengo que Dormir")
  ];
  constructor() { }

  addTask(title: string, description: string) {
    let newTask = new Task(title, description);
    this.tasks.push(newTask);
  };

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
  }

  editTask(id: number, task: Task) {
    this.tasks.splice(id, 1, task)
  }
}
