import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { ValidateService } from './validate.service';

@Injectable()

export class TaskService {
  tasks: Task[] = [
    new Task("Entrenar", "tengo que Entrenar"),
    new Task("Programar", "tengo que Programar"),
    new Task("Comer", "tengo que Comer"),
    new Task("Dormir", "tengo que Dormir")
  ];
  constructor(private validateService: ValidateService) { }

  async addTask(title: string, description: string) {
    const titleName = "title";
    const descriptionName = "description";

    let validTitle = 0;
    let validDescription = 0;

    await this.validateService.null(title, titleName)
      .then(res => {
        console.log(res);
        return this.validateService.minor(title, titleName, 6);
      }).then(res => {
        console.log(res)
        return this.validateService.bigger(title, titleName);
      }).then(res => {
        validTitle = 1;
        console.log(res, validTitle);
      })
      .catch(e => console.log(e));
      
    await this.validateService.null(description, descriptionName)
      .then(res => {
        console.log(res);
        return this.validateService.minor(description, descriptionName, 6);
      }).then(res => {
        console.log(res)
        return this.validateService.bigger(description, descriptionName, 20);
      }).then(res => {
        validDescription = 1;
        console.log(res, validDescription)
      })
      .catch(e => console.log(e));
      
    console.log(validTitle, validDescription);

    if(validTitle == 1 && validDescription == 1) {
      let newTask = new Task(title, description);
      this.tasks.push(newTask);
    };
  };
}
