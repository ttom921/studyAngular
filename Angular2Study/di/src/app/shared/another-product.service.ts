import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AnotherProductService implements  ProductService {

  constructor(public logger:LoggerService) { }

  getProduct(): Product {
    return new Product(1,"iPhone8",8888,"最新款iPhone8的手機");
  }

  

}
