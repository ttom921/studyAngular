import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductService {
  constructor(public logger:LoggerService) { }
  getProduct() : Product{
    this.logger.log("getProduct方法被調用");
    return new Product(0,"iPhone7",5899,"最新款iPhone7的手機");
  }
}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ){

  }
}
