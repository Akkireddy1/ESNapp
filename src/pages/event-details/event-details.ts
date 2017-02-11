import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event=this.navParams.get("event");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    
  }

}
