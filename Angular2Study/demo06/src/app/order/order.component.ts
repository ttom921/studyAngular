import { Component, OnInit, Input } from '@angular/core';
import { PriceQuote } from '../price-quote/price-quote.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  /* @Input()
  stockCode: string;

  @Input()
  amount:number; */
  @Input()
  priceQuote:PriceQuote;
  constructor() { 
   
    
  }

  ngOnInit() {
  }

}
