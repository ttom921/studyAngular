import { Component, OnInit, Input, OnChanges, SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges ,DoCheck{
  


  @Input()
  greeting: string;
  @Input()
  user: { name: string };

  message: string = '初始化消息';

  oldusername:string;
  changeDetected:boolean = false;
  noChangeCount:number=0;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
  ngDoCheck(): void {
    if(this.user.name!= this.oldusername){
      this.changeDetected=true;
      console.log("Docheck:user.name從"+this.oldusername + "變為"+ this.user.name);
      this.oldusername=this.user.name;
    }

    if(this.changeDetected){
      this.noChangeCount=0;
    }else{
      this.noChangeCount=this.noChangeCount + 1;
      console.log("DoCheck:user.name沒有變化時ngDoCheck方法已經被調用"+this.noChangeCount+"次");
    }
    this.changeDetected=false;
  }
}
