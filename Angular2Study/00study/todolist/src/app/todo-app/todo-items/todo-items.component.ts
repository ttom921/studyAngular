import { TodoItem } from '../../shared/todo-item';
import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  
  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoListService.loadTodoList();
  }
  getTodoList(){
    return this.todoListService.GetTodoList();
  }
  ckclick(item:TodoItem){
      //item.done=(!item.done);
      //console.log(item.done);
      this.todoListService.toogleItemStatus(item);
  }
  deltodoitem(item:TodoItem){
    console.log(item.value);
    
  }
 
}
