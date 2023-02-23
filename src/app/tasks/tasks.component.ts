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
  editTitleError!: any;
  editDescriptionError!: any;

  titleField!: string;
  descriptionField!: string;

  constructor(
    private taskService: TaskService,
    private validateService: ValidateService) {}

  ngOnInit():void {
    this.tasks = this.taskService.tasks;
    this.titleField = "";
    this.descriptionField = "";
  }

  async addNewTask() {
    const titleErrorP = document.getElementById("title-error-p");
    const descriptionErrorP = document.getElementById("description-error-p");

    let titleName = "title";
    let descriptionName = "description";

    let validTitle = 0;
    let validDescription = 0;

    await this.validateService.null(this.titleField, titleName)
      .then(res => {
        this.titleError = res;
        return this.validateService.minor(this.titleField, titleName, 6);
      }).then(res => {
        this.titleError = res;
        return this.validateService.bigger(this.titleField, titleName);
      }).then(res => {
        validTitle = 1;
        this.titleError = res;
      })
      .catch(err => {
        this.titleError = err;
      });
      
    await this.validateService.null(this.descriptionField, descriptionName)
      .then(res => {
        this.descriptionError = res;
        return this.validateService.minor(this.descriptionField, descriptionName, 6);
      }).then(res => {
        this.descriptionError = res;
        return this.validateService.bigger(this.descriptionField, descriptionName, 20);
      }).then(res => {
        validDescription = 1;
        this.descriptionError = res;
      })
      .catch(err => {
        this.descriptionError = err;
      });
      
    console.log(validTitle, validDescription);

    if(this.titleError == "" || this.descriptionError == "") {
      this.titleError = "El campo está vacío.";
      this.descriptionError = "El campo está vacío.";
    }

    if(validTitle == 1 && validDescription == 1) {
      this.taskService.addTask(this.titleField, this.descriptionField);
      this.titleError = "";
      this.descriptionError = "";
      this.titleField = "";
      this.descriptionField = "";
    };
  };

  deleteTask(id: number) {
    this.taskService.deleteTask(id)
  }
  async editTask(id: number, title: string, description: string) {
  
    let titleName = "title";
    let descriptionName = "description";

    let validTitle = 0;
    let validDescription = 0;

    await this.validateService.null(title, titleName)
      .then(res => {
        this.editTitleError = res;
        return this.validateService.minor(title, titleName, 6);
      }).then(res => {
        this.editTitleError = res;
        return this.validateService.bigger(title, titleName);
      }).then(res => {
        validTitle = 1;
        this.editTitleError = res;
      })
      .catch(err => {
        this.editTitleError = err;
      });
      
    await this.validateService.null(description, descriptionName)
      .then(res => {
        this.editDescriptionError = res;
        return this.validateService.minor(description, descriptionName, 6);
      }).then(res => {
        this.editDescriptionError = res;
        return this.validateService.bigger(description, descriptionName, 20);
      }).then(res => {
        validDescription = 1;
        this.editDescriptionError = res;
      })
      .catch(err => {
        this.editDescriptionError = err;
      });
      
    console.log(validTitle, validDescription);

    if(validTitle == 1 && validDescription == 1) {
      let taskEdited = new Task(title, description);
      this.taskService.editTask(id, taskEdited);
      this.editTitleError = "";
      this.editDescriptionError = "";
    };
  }
  
  openEditTask(id: number) {
    const edit = document.getElementById("edit-task-wrapper-"+id)
    edit?.classList.add("show");
  }
  close(id: number) {
    const wrapper = document.getElementById("edit-task-wrapper-"+id);
    wrapper?.classList.remove("show");
  }
}
