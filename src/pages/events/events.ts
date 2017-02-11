import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { EventDetailsPage } from '../event-details/event-details';

/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  events: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.events=af.database.list('/events');
  }

  ionViewDidLoad() {

  }

  goToEvent(event){
    console.log(event.name);
    this.navCtrl.push(EventDetailsPage, {
                      event: event
    });
  }
}