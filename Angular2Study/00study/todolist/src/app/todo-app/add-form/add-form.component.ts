import { Component, OnInit,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() addTodoItem= new EventEmitter();
  placeholderText="請輸入代辦事項!!";
  constructor() { }
  todoText="";
  ngOnInit() {
  }
  addTodo($event:MouseEvent){
    //console.log('輸入的文字為:'+this.todoText);
    this.addTodoItem.emit(this.todoText);
  }
}
