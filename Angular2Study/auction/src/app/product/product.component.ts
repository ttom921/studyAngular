import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Observable<Product[]>;
  private imgUrl = 'http://placehold.it/300x150';

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }

}


