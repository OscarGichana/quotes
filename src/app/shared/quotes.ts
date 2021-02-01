export class Quote {
  public upVotes:number
  public downVotes:number
  public showDescription: boolean;
  constructor(public id: number, public quote: string, public name: string, public author: string, public completeDate: Date){
    this.showDescription=false;

  }
}