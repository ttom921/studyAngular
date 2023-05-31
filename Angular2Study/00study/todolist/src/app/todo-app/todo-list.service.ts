import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { TodoItem } from '../shared/todo-item';
import { Injectable } from '@angular/core';



@Injectable()
export class TodoListService {

  // 原來的資料移到assets/todo-list.json裡面去了
  todoItems: TodoItem[] ;
  constructor(private http:Http ) { }

  // 使用http.get取得後端資料
  // http.get會回傳RxJS的Observable物件
  // 我們先用.toPromise()轉回我們會使用的ES6 Prmoise
loadTodoList(){
  this.http
  .get('/assets/todo-list.json')
  .toPromise()
  .then(response=>{
    this.todoItems=response.json();
  });
}

  GetTodoList() {
    return this.todoItems;
  }
  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }
  deleteItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }
  toogleItemStatus(item: TodoItem) {
    item.done = !item.done;
  }
}
