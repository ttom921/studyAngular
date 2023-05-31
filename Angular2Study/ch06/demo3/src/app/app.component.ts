import { Component,ViewChild,OnInit,AfterViewInit,AfterViewChecked } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit,AfterViewChecked {
  
  title = 'app';
  @ViewChild("child1")
  child1:ChildComponent;
  constructor(){}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.child1.greeting("Tom");
  }
  ngAfterViewInit(): void {
    console.log("父組件的視圖初始化完畢");
  }
  ngAfterViewChecked(): void {
    console.log("父組件的視圖變更查測完畢");
  }
 
}
