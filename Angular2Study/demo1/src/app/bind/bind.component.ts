import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
//   size: number = 2;
//   imgUrl: string = "http://placehold.it/400x220";

//   divClass: string;
//   isBig: boolean = false;
//   agdivClass: any = {
//     a: false,
//     b: false,
//     c: false
//   };
//   isDev: boolean = true;
//   divStyle: any = {
//     color: 'red',
//     background: 'yellow'
//   }
//   name: string;

//  searchInput:FormControl = new FormControl

birthday : Date;
pi : number;
size : number =7;
  constructor() {
    // setTimeout(() => {
    //   this.divClass = 'a b c';
    // }, 3000);

    // setTimeout(() => {
    //   this.isBig = true;
    // }, 3000);

    // setTimeout(() => {
    //   this.agdivClass = {
    //     a: true,
    //     b: true,
    //     c: true
    //   };
    // }, 3000);

    // setTimeout(() => {
    //   this.isDev = false;
    // }, 3000);

    // setTimeout(() => {
    //   this.divStyle = {
    //     color: 'yellow',
    //     background: 'red'
    //   }
    // }, 3000);

    //
    // Observable.from([1, 2, 3, 4])
    // .filter(e => e % 2 == 0)
    // .map( e =>e*e)
    // .subscribe(
    //   e => console.log(e),
    //   err => console.log(err),
    //   ()=> console.log('結束啦')
    // );
    //

    // this.searchInput.valueChanges
    // .debounceTime(500)
    // .subscribe( stockCode => this.getStockInfo(stockCode));

    this.birthday= new Date();

    this.pi=3.141592653589793;

     
  }

  ngOnInit() {

  }
  doOnClick(event: any) {
    console.log(event);
  }
  donOnInput(event: any) {
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'));
  }
  onkey(value:string){
    console.log(value);
  } 
  getStockInfo(value:string){
    console.log(value);
  }
}
