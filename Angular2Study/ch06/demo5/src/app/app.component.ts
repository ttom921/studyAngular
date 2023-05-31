import { Component ,AfterContentInit,AfterContentChecked,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {
  title = 'app';
  ngAfterContentInit(): void {
    console.log("父組件投影內容初始化完畢");
  }
  ngAfterContentChecked(): void {
    console.log("父組件投影內容變更檢測完畢");
  }
  ngAfterViewInit(): void {
    console.log("父組件視圖內容初始化完畢");
  }
 
  
 
}
