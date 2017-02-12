import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

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
  location: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.event=this.navParams.get("event");
    console.log("event's location's id: "+this.event.location);
    this.location=af.database.object('/location/'+this.event.location, { preserveSnapshot: true });///TODO i wont need to get locations here, I ll get location id with event.location and i ll get map wiht all markers already created
    this.location.subscribe(snapshot=>{
      snapshot
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    console.log("location: "+this.location);
  }

}
