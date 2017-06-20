import { Component } from '@angular/core'
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-tabs',
  template: `
   <ion-tabs>
    <ion-tab [root]="favoraitesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
    <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="bookmark"></ion-tab>
   </ion-tabs>
  `
})

export class TabsPage {
  favoraitesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
