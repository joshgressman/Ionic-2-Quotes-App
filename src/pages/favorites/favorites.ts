import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { SettingsService } from '../../services/settings';
import { QuotePage } from '../quote/quote';
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

 quotes: Quote[];

 constructor(private quotesService: QuotesService, private modalCtrl: ModalController, private settingsService: SettingsService){}

  //Lifecycle hook that initializes quotes array from services
  ionViewWillEnter(){
    //getFavoriteQuotes will load a copy of the array from the service
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  //this method will create a modal using Modal Controller from ionic-angular
  onViewQuote(quote: Quote){
   const modal = this.modalCtrl.create(QuotePage, quote);
   modal.present();
   modal.onDidDismiss((remove: boolean) => {
     if(remove){
     this.quotesService.removeQuoteFromFavorites(quote);
     this.quotes = this.quotesService.getFavoriteQuotes();
    }
   });
  }

  onRemoveFromFavorites(quote: Quote){
     this.quotesService.removeQuoteFromFavorites(quote);
     this.quotes = this.quotesService.getFavoriteQuotes();
  }

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
