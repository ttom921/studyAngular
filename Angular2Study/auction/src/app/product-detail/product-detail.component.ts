import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';
import { WebSocketService } from '../shared/web-socket.service';
import { isArray } from 'util';
import { Subscription } from 'rxjs/Subscription';
import { fail } from 'assert';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  comments: Comment[];
  newRating: number = 5;
  newComment: string = "";
  isCommentHidden: boolean = true;
  isWatched: boolean = false;
  currentBid: number;

  subscription: Subscription;

  constructor(private routerInfo: ActivatedRoute,
    private productService: ProductService,
    private wsService: WebSocketService) { }

  ngOnInit() {
    const productId: number = this.routerInfo.snapshot.params['productId'];
    this.productService.getProduct(productId).subscribe(
      product => {
        this.product = product;
        this.currentBid = product.price;
      }
    );
    this.productService.getCommentsForProductId(productId).subscribe(
      res => this.comments = res
    );
  }
  addComment() {
    let comment = new Comment(
      0,
      this.product.Id,
      new Date().toDateString(),
      "someone",
      this.newRating,
      this.newComment);
    this.comments.unshift(comment);

    // 計算平均
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    //
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
  watchProduct() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      this.isWatched = true;
      this.subscription = this.wsService.createOblserableSocket('ws://localhost:8085', this.product.Id)
        .subscribe(
        products => {
          //console.log(products);
          //console.log( (typeof products) );
          let myproducts = JSON.parse(products);
          //console.log( myproducts );
          // if (Array.isArray(products)) {
          //   //console.log('this.product.Id->' + this.product.Id);
          //   console.log('products is array');
          // }
          let product = myproducts.find(p => p.productId === this.product.Id);
          this.currentBid = product.bid;
          // let product = products.find( p => p.productId === this.product.Id);
          // this.currentBid =  product.bid;
        }
        );
    }

  }

}
