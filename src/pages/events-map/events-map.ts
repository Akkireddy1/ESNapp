import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapProvider } from '../../providers/map-provider';


@Component({
  selector: 'page-events-map',
  templateUrl: 'events-map.html'
})
export class EventsMapPage {

  @ViewChild('map') mapElement;
  map: any;
  locations=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public mapService: MapProvider) {
      
    
  }

  ionViewDidLoad() {
    this.locations=this.navParams.get("locations");
      this.mapService.initMap(this.mapElement, this.locations).then((resolve)=>{
      this.map=resolve;
      this.mapService.showAllEvents(this.map);
      });
  }

}
