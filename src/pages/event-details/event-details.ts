import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the EventDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html'
})

export class EventDetailsPage {
  event: any;
  location: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.event=this.navParams.get("event");
    console.log("event's location's id: "+this.event.location);
    this.location=af.database.list('/locations',{
      query: {
        orderByChild: "uid",
        equalTo: this.event.location
      }
    });
    this.location.subscribe(snapshot=>{
      console.log(snapshot);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');

  }

}
