import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent{

  close() {
    const wrapper = document.getElementById("wrapper");
    wrapper?.classList.remove("show");
  }
}
