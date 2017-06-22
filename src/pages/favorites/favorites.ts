import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

 quotes: Quote[];

 constructor(private quotesService: QuotesService){}

  //Lifecycle hook that initializes quotes array from services
  ionViewWillEnter(){
    //getFavoriteQuotes will load a copy of the array from the service
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

}
