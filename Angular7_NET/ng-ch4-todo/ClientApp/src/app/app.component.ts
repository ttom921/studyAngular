import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  todos: Todo[] = [{
    label: 'Buy milk',
    completed: true
  }, {
    label: 'Save the world',
    completed: false
  }];
  name: string;
  constructor() {
    this.name = 'John';
  }
  addTodo(label) {
    this.todos.push({
      label,
      completed:false
    });
  }
  removeTodo(idx) {
    this.todos.splice(idx, 1);
    //let todo = this.todos.findIndex(idx);
    //if (todo != null)
    //  this.todos.splice(idx,1);
  }
  toggleCompletion(idx) {
    let todo = this.todos[idx];
    todo.completed = !todo.completed;
  }
}
