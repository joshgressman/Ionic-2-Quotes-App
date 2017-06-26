import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
 person: string;
 text: string;

constructor(private viewCtrl: ViewController, private navParams: NavParams){}

ionViewDidLoad(){ //get data from the navParams sent to the modal from favorites
 this.person = this.navParams.get('person');
 this.text = this.navParams.get('text');
}

 //Method will close the modal window
 //View controller controls the currently active view
  onClose(remove = false){
   this.viewCtrl.dismiss(remove);
  }

}
