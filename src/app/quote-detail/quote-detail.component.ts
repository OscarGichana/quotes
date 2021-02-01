import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../shared/quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upVotes:number=0;
  updateUs:number=0;
  upVote(){
    this.upVotes=this.upVotes+1;
    this.updateUs=this.upVotes;
  }

  downVotes:number=0;
  downdateUs:number=0
  downVote(){
    this.downVotes=this.downVotes+1;
    this.downdateUs=this.downVotes;
  }

  constructor() { }

  ngOnInit() {
  }

}
