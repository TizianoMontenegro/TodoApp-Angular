import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    new Task("Entrenar", "tengo que Entrenar"),
    new Task("Programar", "tengo que Programar"),
    new Task("Comer", "tengo que Comer"),
    new Task("Dormir", "tengo que Dormir")
  ];
  constructor() { }
}
