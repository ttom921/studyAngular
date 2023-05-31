import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  /* todoItems:TodoItem[];
  addTodo(text){
    this.todoItems.push({
      id:(new Date()).getTime(),
      value:text,
      done:false
    });
  }
  deltodoItem(item:TodoItem){
    console.log('del item='+item.value);
    this.todoItems= this.todoItems.filter( a=> a.id !== item.id);
  } */
}
