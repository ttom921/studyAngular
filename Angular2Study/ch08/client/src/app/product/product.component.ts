import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 第一種
  dataSource: Observable<any>;
  products: Array<any> = [];
  constructor(private http: HttpClient) {
    this.dataSource = this.http.get('/api/products')
      .map((res) => res);
    //  this.http.get('/products').subscribe( data =>{
    //   this.dataSource = data['products'];
    // });
  }

   ngOnInit() {
     this.dataSource.subscribe(
       (data) => { this.products = data; }
     );
   }

  //pipe
//  products: Observable<any>;
// constructor(private http: HttpClient) {
//   let myHeader= new HttpHeaders().set('Authorization', 'Basic 123456');
//   this.products = this.http.get('/api/products',{headers:myHeader})
//       .map((res) => res);
//   }
}
