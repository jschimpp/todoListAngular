import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from 'src/app/models/todoItem';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() onFormSubmitted = new EventEmitter<TodoItem>()
  todoName=""

  submit(event: Event) {
    event.preventDefault();
    const todo: TodoItem = {
      todoName: this.todoName 
    }
    this.onFormSubmitted.emit(todo);
    this.todoName=""
  }
}
