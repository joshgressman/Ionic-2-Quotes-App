import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
 quoteGroup: {category: string, quotes: Quote[], icon: string};

//Get the data  from the library page-library
constructor(private navParams: NavParams, private alertCtrl: AlertController){
    this.quoteGroup = this.navParams.data;
    //.data is what is being passed for the quoteGroup{}
    console.log(this.quoteGroup);
}


//setting up the alert on click to favorites
onAddToFavorites(selectedQuote: Quote){
  const alert = this.alertCtrl.create({
    title: 'Add Quote',
    subTitle: 'Are you sure?',
    message: 'Are you sure you want to add the quote?',
    buttons: [
      {
        text: 'Yes, add to favorites',
        handler: () => {
          console.log("OK");
        }
      },
      {
        text: 'No, do not add',
        role: 'cancel',
        handler: () => {
          console.log("Cancel");
        }
      }
    ]

  });
  alert.present();
}

}
