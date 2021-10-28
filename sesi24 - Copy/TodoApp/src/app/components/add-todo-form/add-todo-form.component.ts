import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../../models/Todo';



@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string = "";

  inputData = new FormGroup({
    inputTodo: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),

  })

  get Input() {
    return this.inputData.get('inputTodo')
  }
  isSubmited = false;

  // validateForm() {
  //   if (this.Input?.errors) {
  //     console.log(this.Input.errors)
  //   }
  // }

  handleInputForm() {
    this.isSubmited = true
    console.log(this.inputData.get('inputTodo'))
    this.inputTodo = this.inputData.get('inputTodo')?.value

    if (this.inputData.get('inputTodo')?.status != 'INVALID') {
      const todo: Todo = {
        content: this.inputTodo,
        completed: false
      };

      this.newTodoEvent.emit(todo)
      this.inputTodo = ""
    }
  }



  handleIsSubmitedState() {
    if (this.isSubmited == true) {
      this.isSubmited = false
    }
  }

  // addTodo() {
  //   const todo: Todo = {
  //     content: this.inputTodo,
  //     completed: false
  //   };

  //   this.newTodoEvent.emit(todo)
  //   this.inputTodo = ""
  // }

  constructor() { }

  ngOnInit(): void {
  }


}