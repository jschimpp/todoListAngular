import { Component, Input } from '@angular/core';
import { TodoItem } from 'src/app/models/todoItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() todos: TodoItem[];

  constructor() {
    this.todos = []
  }

}
