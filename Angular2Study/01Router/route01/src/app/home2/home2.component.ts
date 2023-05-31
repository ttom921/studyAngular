import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  private id: number;
  private isProd:boolean;
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.routerInfo.snapshot.params['id'];
    this.isProd=this.routerInfo.snapshot.data[0]['isProd'];
    console.log(this.id);
  }

}
