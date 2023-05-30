import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  todos: TodoItem[]=[];

  addTodo(todo: TodoItem) {
    this.todos.push(todo);
  }
}
