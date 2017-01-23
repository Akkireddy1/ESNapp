import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { EventsPage } from '../events/events'
import { MapPage } from '../map/map'
import { GalleryPage } from '../gallery/gallery'

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = EventsPage;
  tab3Root: any = MapPage;
  tab4Root: any = GalleryPage;

  constructor(public navCtrl: NavController) {

  }

}