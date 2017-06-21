import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
 quoteGroup: {category: string, quotes: Quote[], icon: string};

//Get the data  from the library page-library
constructor(private navParams: NavParams){
    this.quoteGroup = this.navParams.data;
    //.data is what is being passed for the quoteGroup{}
    console.log(this.quoteGroup);
}


}
