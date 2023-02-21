import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks!: Task[];
  titleError!: any;
  descriptionError!: any;

  constructor(
    private taskService: TaskService,
    private validateService: ValidateService) {}

  ngOnInit():void {
    this.tasks = this.taskService.tasks;
  }

  async addNewTask(title: string, description: string) {
    const titleName = "title";
    const descriptionName = "description";

    let validTitle = 0;
    let validDescription = 0;

    await this.validateService.null(title, titleName)
      .then(res => {
        this.titleError = res
        return this.validateService.minor(title, titleName, 6);
      }).then(res => {
        this.titleError = res
        return this.validateService.bigger(title, titleName);
      }).then(res => {
        validTitle = 1;
        this.titleError = res
      })
      .catch(err => {
        this.titleError = err;
      });
      
    await this.validateService.null(description, descriptionName)
      .then(res => {
        this.descriptionError = res;
        return this.validateService.minor(description, descriptionName, 6);
      }).then(res => {
        this.descriptionError = res;
        return this.validateService.bigger(description, descriptionName, 20);
      }).then(res => {
        validDescription = 1;
        this.descriptionError = res;
      })
      .catch(err => {
        this.descriptionError = err;
      });
      
    console.log(validTitle, validDescription);

    if(validTitle == 1 && validDescription == 1) {
      this.taskService.addTask(title, description);
    };
  };
}
