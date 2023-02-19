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

  fieldValidate(
    field: string, 
    fieldName: string,
    minLength: number,
    maxLength: number) {
      if(field == "") {
        alert("pon algo valido");
        return false;
      }else return true;

      if(field == " ") {
        alert("pon algo valido 2");
        return false;
      }else return true;
      alert("hola")
      // if(
      //   field !== "" &&
      //   field !== " " &&
      //   field.length >= minLength &&
      //   field.length <= maxLength
      // ) {}
      new Promise((resolve, reject) => {

      })
  }
  
  addTask(title: string, description: string) {
    // this.fieldValidate(title, "title", 6, 20)
    const titleName = "title";
    const descriptionName = "description";
    this.validateService.null(title, titleName)
      .then(res => {
        console.log(res);
        return this.validateService.minor(title, titleName, 6);
      }).then(res => {
        console.log(res)
        return this.validateService.bigger(title, titleName);
      }).then(res => {console.log(res)}).catch(e => console.log(e))

    // if(
    //   title !== "" &&
    //   description !== "" &&
    //   title !== " " &&
    //   description !== " "
    //   ) {
    //   let newTask = new Task(title, description);
    //   this.tasks.push(newTask);

    // }else{
    //   alert("Ah ocurrido un error, por favor complete los campos correctamente.")
    // }
  }
}
