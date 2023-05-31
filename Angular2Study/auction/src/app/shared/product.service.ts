import { Injectable ,EventEmitter} from '@angular/core';
import { CommaExpr } from '@angular/compiler/src/output/output_ast';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class ProductService {

  public searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();
  constructor(private http: HttpClient) { }
  getAllCategories(): string[] {
    return ["電子商品", "硬體設備", "圖書"];
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('/api/products/' + id);
  }
  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/products/' + id + '/comments');
  }
  search(searchparams: ProductSearchParams): Observable<Product[]> {

    return this.http.get<Product[]>('/api/products', { params: this.encodeParams(searchparams) });
  }
  private encodeParams(data: ProductSearchParams): HttpParams {

    let httpParams = new HttpParams();
    Object.keys(data).filter(key => data[key]).forEach(function (key) {
      // console.log(key+ '->'+ data[key] );
      httpParams = httpParams.append(key, data[key]);
    });
    return httpParams;

    // let result: HttpParams;
    // result = Object.keys(params)
    //   .filter(key => params[key])
    //   .reduce((sum: HttpParams, key: string) => {
    //     sum.append(key, params[key]);
    //     return sum;
    //   }, new HttpParams());
    //   return result;

    // // Initialize Params Object
    // let Params = new HttpParams();
    // // Begin assigning parameters
    // Params = Params.append('title', parameters.title);
    // Params = Params.append('price', parameters.price.toString());
    // Params = Params.append('category', parameters.category);
    // return Params;
  }
}
export class ProductSearchParams {
  constructor(
    public title: string,
    public price: number,
    public category: string) { }
}
export class Product {
  constructor(
    public Id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

export class Comment {
  constructor(public id: number,
    public procuteId: number,
    public timesstamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {
  }
}
