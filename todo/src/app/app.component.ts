import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from './../models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: string = 'Minas Tarefas';
  public form =  new FormGroup({
    
  });

  constructor(private fb : FormBuilder) {

    this.form = this.fb.group({
      title:['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.todos.push(new Todo(1, 'Passear Com o Doguinho <3', false));
    this.todos.push(new Todo(2, 'Ir Ao Supermecado <3', false));
    this.todos.push(new Todo(3, 'Cortar O Cabelo <3', true));
  }

  remove(todo: Todo) {

    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1)
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true
  }

  markAsUndone(todo: Todo) {
    todo.done = false
  }
}
