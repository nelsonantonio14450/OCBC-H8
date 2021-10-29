import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor() { }
  @Output() newTodoEvent = new EventEmitter<Todo>();
  isUpdateBtn = false;

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,

      },
      {
        content: 'Second Todo',
        completed: false,

      }]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo(todo: Todo) {
    this.todos.unshift(todo);
  }

  @Output() newEditTodoEvent = new EventEmitter()
  editTodo: string = ''
  editData = new FormGroup({
    editTodo: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),

  })

  get Input() {

    return this.editData.get('editTodo')
  }
  isSubmited = false;

  handleInputForm(upd: Todo) {

    this.editTodo = this.editData.get('editTodo')?.value
    this.handleIsSubmitedState(true)
    if (this.editData.get('editTodo')?.status != 'INVALID') {
      upd.content = this.editTodo
      upd.completed = false
      upd.editing = false
      const todo: Todo = {
        content: upd.content,
        completed: upd.completed,
        editing: upd.editing
      };


      this.newTodoEvent.emit(todo)
      this.editData.reset()
      this.handleIsSubmitedState(false)
      this.isUpdateBtn = false;
    }
  }



  handleIsSubmitedState(i: boolean) {
    this.isSubmited = i

  }

  editTodoTrigger(todo: Todo) {
    todo.editing = true
    this.isUpdateBtn = true;
  }

  // updateTodo(updTodo: Todo) { //konsepnya sama kek input, yang beda
  //   if (this.editTodo) {
  //     updTodo.content = this.editTodo
  //     updTodo.completed = false
  //     updTodo.editing = false


  //   }
  //   this.newEditTodoEvent.emit(updTodo)
  //   this.editTodo = ''
  // }

}
