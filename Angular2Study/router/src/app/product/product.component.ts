import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId:number;
  private productName:string;
  
  constructor(private routerinfo:ActivatedRoute) { }

  ngOnInit() {
    //參數式 
    //this.productId=this.routerinfo.snapshot.queryParams["id"];
    //url式
    this.routerinfo.params.subscribe((params:Params)=> this.productId=params["id"]);
    this.routerinfo.data.subscribe((data:{product:Product})=>{
      this.productId= data.product.id;
      this.productName=data.product.name;
    });
  }
}
export class Product{
  constructor(public id:number, public name:string){}
}
