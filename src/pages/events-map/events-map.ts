import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapProvider } from '../../providers/map-provider';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-events-map',
  templateUrl: 'events-map.html'
})
export class EventsMapPage {

  @ViewChild('map') mapElement;
  map: any;
  observableLocations: FirebaseListObservable<any>;
  locations=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mapService: MapProvider, af: AngularFire) {
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
      this.mapService.initMap(this.mapElement, this.locations).then((resolve)=>{
      this.map=resolve;
       this.mapService.showAllMarkers(this.map);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsMapPage');
    
  
    
  }

}
