import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { EventDetailsPage } from '../event-details/event-details';
import { EventsMapPage } from '../events-map/events-map';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {  ///////////////////////////////TODO init map only with locations with type:event, pass the map with navParams to the next page

  events: FirebaseListObservable<any>;
  observableLocations: FirebaseListObservable<any>;
  locations=[];
  buttonDisabled=true;

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.events = af.database.list('/events');
    this.observableLocations=af.database.list('/locations', {
      query: {
        orderByChild: 'type',
        equalTo: 'event'
      }
    });
    this.observableLocations.subscribe(snapshot=>{
      snapshot.forEach(location=>{
        this.locations.push(location); 
        console.log("location pushed: "+location.title);
      });
      this.buttonDisabled=false;
    });
  }

  ionViewDidLoad() {

  }

  goToEvent(event) {
    console.log(event.name);
    this.navCtrl.push(EventDetailsPage, {
      event: event
    });
  }

  goToEventsMap() {
    this.navCtrl.push(EventsMapPage,{
      locations:this.locations
    });
  }
}