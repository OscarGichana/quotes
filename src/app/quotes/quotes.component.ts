import { Component, OnInit } from '@angular/core';
import { Quote } from '../shared/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Watch what you it, do not eat a hand that feeds you', 'Guild Flours', 'George Kings', new Date(2020,3,14)),
    new Quote(2,'The seas love the lovable', 'Jason stratham', 'Moana', new Date(2019,6,9)),
    new Quote(3,'The beginning of Life is living laughing and loving.', 'Joanna Bekham', 'Celine Patrick', new Date(2022,1,12)),
  ];


  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {

    {
        this.quotes.splice(index,1)
      }
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
