import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './models/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = []
  categories: string[] = [
    'shopping',
    'work',
    'edu',
    'finance'
  ]
  // title = 'TodoApp';
  handleFormOnSubmit(form: NgForm) {
    const { taskName, category } = form.value
    this.tasks = [...this.tasks, new Task(taskName, false, category)]
    form.reset()
    console.log({ taskName, category })
  }
}
