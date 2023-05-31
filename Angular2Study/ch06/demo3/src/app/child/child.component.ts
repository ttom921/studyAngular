import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit  ,AfterViewInit, AfterViewChecked {
  ngAfterViewInit(): void {
    console.log("子組件的視圖初始化完畢");
  }
  ngAfterViewChecked(): void {
    console.log("子組件的視圖變更查測完畢");
  }
 ngAfterContentInit() {
   //Add 'implements AfterContentInit' to the class.
   
 }
  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    setInterval(() => {
      console.log("hello " + name);
    },5000);
    
  }
}
