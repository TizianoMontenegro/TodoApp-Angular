// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

// Services
import { TaskService } from './task.service';
import { ValidateService } from './validate.service';
import { EditTaskComponent } from './edit-task/edit-task.component';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "tasks", component: TasksComponent},
  {path: "**", component: WrongRouteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    WrongRouteComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [TaskService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
